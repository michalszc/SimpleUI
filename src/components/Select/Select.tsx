import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { RxCross1 } from 'react-icons/rx';
import SelectOption from "./SelectOption";
import Tag from "./Tag";

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
    const [searchInput, setSearchInput] = useState("");
    const [selectedOptions, setSelectedOptions] = useState(selectedValues);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    };

    const resetInput = () => {
        setSearchInput("");
        setSelectedOptions([]);
    };

    const checkIfSelected = (elem: Option):boolean => {
        const e = selectedOptions?.filter((item) => {
           return elem.index === item.index;
        });
        // eslint-disable-next-line no-console
        console.log(e);
        if (e?.length === undefined || e?.length === 0 ) {
            return false;
        }

        return true;
    };

    return(
        <Styles {...props}>
            <StyledContainer>

                <StyledSearchContainer >
                    <StyledTagsContainer>
                        {selectedOptions?.map((elem: Option) => {
                        return(
                            <Tag 
                            onClick={() => {
                                setSelectedOptions(selectedOptions?.filter((item: Option) => { 
                                    return item.index !== elem.index;
                                }));
                            }} 
                            value={elem}></Tag>
                        );
                    })}
                    </StyledTagsContainer>
                    <StyledInput 
                        onFocus={() => setShowOptions(!showOptions)} 
                        // onBlur={() => setShowOptions(false)}
                        value={searchInput} 
                        onChange={handleChange} 
                        placeholder={placeholder} 
                        type="text">
                    </StyledInput>
                    <Cross onClick={resetInput}><RxCross1></RxCross1></Cross>
                </StyledSearchContainer>

                {showOptions ? 
                <StyledOptionsContainer>
                    {values?.map((elem: Option) => {
                        return(
                            <SelectOption 
                            isChecked={checkIfSelected(elem)} 
                            value={elem}></SelectOption>
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
    height: 45px;
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
    max-width: 75%;
    display: flex;
    align-items: center;
    white-space: nowrap;
    /* overflow: auto;  */
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

const Cross = styled.a`
    cursor: pointer;
    padding-right: 5px;
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
