import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { RxCross1 } from 'react-icons/rx';
import Tag from "./Tag";
import { OptionValue } from '../../utils/types/option';

export interface SelectProps extends StyleProps{
    /**
     * All available options 
     * [{ index: string, value: string }]
     */
    values?: OptionValue[];
    /**
     * If true -> you can select multiple values
     */
    multi?: boolean;
    /**
     * activated everytime the component is rendered
     * @returns 
     */
    onChange: (v: OptionValue[]) => void;
    /**
     * If true -> option shows as unselected/selected and can't be select/unselect
     */
    isReadOnly?: boolean;
    /**
     * Text display when input section is empty
     */
    placeholder?: string;
    /**
     * component's children -> should be SelectOption components
     */
    children?: React.ReactNode;
}

const Select: FC<SelectProps> = ({ multi = true, onChange, children, placeholder, values, ...props }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [filteredValues, setFilteredValues] = useState(values);
    const [searchInput, setSearchInput] = useState("");
    const [selectedOptions, setSelectedOptions] = useState<OptionValue[]>([{index: '5', value: 'test'}]);

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

    useEffect(() => {
        onChange(selectedOptions);
    }, [selectedOptions]);

    const resetInput = () => {
        setSearchInput("");
        setFilteredValues(values);
    };

    const checkIfSelected = (elem: OptionValue):boolean => {
        const e = selectedOptions.filter((item) => {
           return elem.index === item.index;
        });
    
        if (e.length === 0 ) {
            return false;
        }
    
        return true;
    };

    const deleteSelectedOption = (elem: OptionValue) => {
        setSelectedOptions(selectedOptions?.filter((item: OptionValue) => { 
            return item.index !== elem.index;
        }));
    };

    const addSelectedOption = (elem: OptionValue) => {
        setSelectedOptions((selected) => [...selected, elem]);
    };

    const changeSelectedOptions = (elem: OptionValue) => {
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

                <StyledSearchContainer>
                    <StyledTagsContainer>
                        {selectedOptions.map((elem) => {
                            return(
                                <Tag value={elem} onClick={() => deleteSelectedOption(elem)}/>
                            );
                        })}
                    </StyledTagsContainer>

                    <StyledInputContainer>
                        <StyledInput placeholder={placeholder} value={searchInput} onChange={handleChange}/>
                        {searchInput.length === 0 ? null :
                            <Cross onClick={resetInput}><RxCross1 /></Cross>
                        }
                    </StyledInputContainer>

                </StyledSearchContainer>

                {showOptions ? 
                <StyledOptionsContainer>
                    {children}
                </StyledOptionsContainer>
                : null}

            </StyledContainer>
        </Styles>
    );
};

export default Select;

const StyledContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    min-width: 300px;
    width: 400px;
    height: auto;
    margin: 0px;
    z-index: 2;
`;

const StyledSearchContainer = styled.div`
    background-color: white;
    width: 100%;
    height: fit-content;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: .5px solid #00000038;
    border-radius: 10px;
    box-shadow: 0px 0px 6px #00000037;

`;

const StyledTagsContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 5px 10px; 
    display: flex;
    padding: 5px 10px;
    justify-content: flex-start;
    align-items: center;
`;

const StyledInputContainer = styled.div`
    height: 100%;
    padding: 5px 10px;   
     width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


const StyledInput = styled.input`
    border: .3px solid #9e9e9e;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    margin-left: 5px;
    font-size: 1em;
    margin: 0px;
    color: #555555;

        
    &:hover {
        border: .3px solid #3ea8ff9a;
    }

    &:focus {
        border: .3px solid #3ea8ff9a;
        outline: none;
    }
`;

const Cross = styled.a`
    cursor: pointer;
    padding-left: 10px;
`;

const StyledOptionsContainer = styled.div`
    margin-top: 10px;
    width: 100%;
    height: fit-content;
    border: .5px solid #00000038;
    border-radius: 10px;
    box-shadow: 0px 0px 6px #00000037;
    padding: 5px 10px; 
    display: flex;
    flex-direction: column;;
`;
