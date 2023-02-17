import React, { FC, useState } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { SlArrowDown } from 'react-icons/sl';
import { RxCross1 } from 'react-icons/rx';
import SelectOption from "./SelectOption";

type Option = {
    index: string;
    value: string;
}

export interface SelectProps extends StyleProps {
    /**
     * All available options 
     */
    values?: Option[];
    /**
     * Array of selected values
     */
    selectedValues?: Option[];
    /**
     * If true -> you can select multiple values
     */
    multiple?: boolean;
    /**
     * If true -> option shows as unselected/selected and can't be select/unselect
     */
    isReadOnly?: boolean;
    /**
     * Text display when input section is empty
     */
    placeholder?: string;
}

const Select: FC<SelectProps> = ({ placeholder, values, selectedValues, multiple, ...props }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [searchOption, setSearchOption] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchOption(event.target.value);
    };

    const resetInput = () => {
        setSearchOption("");
    };

    return(
        <Styles {...props}>
            <StyledContainer>
                <StyledSearchContainer >
                    <StyledTagsContainer></StyledTagsContainer>
                    <StyledInput value={searchOption} onChange={handleChange} placeholder={placeholder} type="text"></StyledInput>
                    <Cross onClick={resetInput}><RxCross1></RxCross1></Cross>
                    <Arrow onClick={() => setShowOptions(!showOptions)}><SlArrowDown /></Arrow>
                </StyledSearchContainer>
                {showOptions ? 
                <StyledOptionsContainer>
                    {values?.map((elem: Option) => {
                        return(
                            <SelectOption key={elem.index}>{elem.value}</SelectOption>
                        );
                    })}
                </StyledOptionsContainer>
                : null}
            </StyledContainer>
        </Styles>
    );
};

export default Select;

const StyledContainer = styled.div`
    max-width: 300px;
    min-width: 200px;
    height: auto;
`;

const StyledSearchContainer = styled.div<SelectProps>`
    background-color: white;
    padding: 5px 10px;
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    border: .5px solid #00000038;
    border-radius: 10px;
    box-shadow: 0px 0px 6px #00000038;
    transition: all .5s ease-in-out;
`;

const StyledTagsContainer = styled.div`
    height: 100%;
    width: auto;
    overflow: auto;
    white-space: nowrap;
    float: left;
`;

const StyledInput = styled.input`
    border: none;
    height: 100%;
    width: 100%;
    margin-right: 20px;
    margin-left: auto;
    font-size: 1em;
    color: #555555;

    &:focus {
        outline: none;
    }
`;

const Arrow = styled.a`
    cursor: pointer;
    width: auto;
    margin-left: 5px;
    float: right;
`;

const Cross = styled.a`
    cursor: pointer;
    padding-right: 5px;
    border-right: 1px solid #555555;
`;

const StyledOptionsContainer = styled.div`
    margin-top: 10px;
    width: 100%;
    height: fit-content;
    border: .5px solid #00000038;
    border-radius: 10px;
    box-shadow: 0px 0px 6px #00000038;
    padding: 10px 10px;
`;
