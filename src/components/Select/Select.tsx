import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { RxCross1 } from 'react-icons/rx';
//import SelectOption from "./SelectOption";
import Tag from "./Tag";
import { Option } from ".";

export interface SelectProps extends StyleProps{
    /**
     * All available options 
     * [{ index: string, value: string }]
     */
    values?: Option[];
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
    /**
     * component's name
     */
    name?: string;
    /**
     * component's children -> should be <SelectOption />
     */
    children?: React.ReactNode;
}

const Select: FC<SelectProps> = ({ children, placeholder, values, selectedValues = [], multi: multi = true, ...props }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [filteredValues, setFilteredValues] = useState(values);
    const [searchInput, setSearchInput] = useState("");
    const [selectedOptions, setSelectedOptions] = useState(selectedValues);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchInput(event.target.value);
        setShowOptions(true);
    };

    useEffect(()=> {
        if (searchInput.length > 0) {
            setFilteredValues(filteredValues?.filter((item) => {
                return item.value.trim().toLowerCase().match(searchInput.trim().toLowerCase());
            }));
        }
        else {
            setFilteredValues(values);
        }
    }, [searchInput]);

    const resetInput = () => {
        setSearchInput("");
        setSelectedOptions([]);
        setFilteredValues(values);
    };

    const deleteSelectedOption = (elem: Option) => {
        setSelectedOptions(selectedOptions?.filter((item: Option) => { 
            return item.index !== elem.index;
        }));
    };

    return(
        <Styles {...props}>
            <StyledContainer>
                <StyledSearchContainer>
                    {selectedOptions.length === 0 ? null :
                        <StyledTagsContainer>
                            {selectedValues?.map((elem: Option) => {
                            return(
                                <Tag 
                                    onClick={() => {deleteSelectedOption(elem);}} 
                                    value={elem} 
                                />
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
                    {children}
                    {/* {filteredValues.map((elem: Option) => {
                        return(
                            <SelectOption 
                                onClick={() => changeSelectedOptions(elem)}
                                isChecked={checkIfSelected(elem)} 
                                value={elem} 
                            />
                        );
                    })} */}
                </StyledOptionsContainer>
                : null}

            </StyledContainer>
        </Styles>
    );
};

export default Select;

const StyledContainer = styled.div`
    min-width: 300px;
    width: 400px;
    height: auto;
`;

const StyledSearchContainer = styled.div`
    background-color: white;
    width: 100%;
    height: 45px;
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: .5px solid #00000038;
    border-radius: 10px;
    box-shadow: 2px 0px 6px #00000038;
    transition: all .5s ease-in-out;

    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    
    &::-webkit-scrollbar {
        background-color: #dedede88;
        border-radius: 20px;
        height: 4px;
        -webkit-overflow-scrolling: auto !important;
        background-clip: border-box;
    }

    &::-webkit-scrollbar-thumb {
        background: #b8b8b8;
        border-radius: 20px;
    }
`;

const StyledTagsContainer = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
`;

const StyledInput = styled.input`
    border: none;
    height: 100%;
    min-width: 30%;
    width: 60%;
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
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
`;
