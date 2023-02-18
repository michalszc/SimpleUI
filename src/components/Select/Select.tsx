import React, { FC, useState } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { RxCross1 } from 'react-icons/rx';
import SelectOption from "./SelectOption";
import Tag from "./Tag";
import { Option } from ".";

export interface SelectProps extends StyleProps {
    /**
     * All available options 
     * [{ index: string, value: string }]
     */
    values: Option[];
    /**
     * Array of selected values
     */
    selectedValues?: Option[];
    /**
     * If true -> you can select multiple values
     */
    multi?: boolean;
    /**
     * If true -> option shows as unselected/selected and can't be select/unselect
     */
    isReadOnly?: boolean;
    /**
     * Text display when input section is empty
     */
    placeholder?: string;
}

const Select: FC<SelectProps> = ({ placeholder, values, selectedValues = [], multi: multi = true, ...props }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [selectedOptions, setSelectedOptions] = useState(selectedValues);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
        setShowOptions(true);
    };

    const resetInput = () => {
        setSearchInput("");
        setSelectedOptions([]);
    };

    const checkIfSelected = (elem: Option):boolean => {
        const e = selectedOptions?.filter((item) => {
           return elem.index === item.index;
        });

        if (e?.length === 0 ) {
            return false;
        }

        return true;
    };

    const deleteSelectedOption = (elem: Option) => {
        setSelectedOptions(selectedOptions?.filter((item: Option) => { 
            return item.index !== elem.index;
        }));
    };

    const addSelectedOption = (elem: Option) => {
        setSelectedOptions((selected) => [...selected, elem]);
    };

    const changeSelectedOptions = (elem: Option) => {
        if (checkIfSelected(elem)) {
            deleteSelectedOption(elem);
        } 
        else {
            if(!multi) {
                setSelectedOptions(() => [elem]);
            }
            else{
                addSelectedOption(elem);
            }
        }
    };

    return(
        <Styles {...props}>
            <StyledContainer>

                <StyledSearchContainer >
                    {selectedOptions.length === 0 ?
                    null :
                    <StyledTagsContainer>
                        {selectedOptions?.map((elem: Option) => {
                        return(
                            <Tag 
                            onClick={() => {deleteSelectedOption(elem);}} 
                            value={elem}></Tag>
                        );
                    })}
                    </StyledTagsContainer>
                    }
                    <StyledInput 
                        onFocus={() => setShowOptions(!showOptions)}
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
                            onClick={() => changeSelectedOptions(elem)}
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
    overflow-inline: auto;
`;

const StyledSearchContainer = styled.div`
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
    width: 80%;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    
    &::-webkit-scrollbar {
        background-color: #ecf8ff;
        width: 5px;
        height: 5px;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: #959595;
        border-radius: 5px;
    }
`;

const StyledInput = styled.input`
    border: none;
    height: 100%;
    width: 100%;
    margin-left: 5px;
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
    display: flex;
    flex-direction: column;
`;
