import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { RxCross1 } from 'react-icons/rx';
import Tag from "./Tag";
import { OptionValue } from '../../utils/types/option';
import { OptionProps } from "./Option";

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
     * component's children -> should be Option components
     */
    children: React.ReactElement<OptionProps> | Array<React.ReactElement<OptionProps>>;
}

const Select: FC<SelectProps> = ({ multi = true, onChange, children, placeholder, ...props }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [selectedOptions, setSelectedOptions] = useState<OptionValue[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchInput(event.target.value);
        setShowOptions(true);
    };

    useEffect(() => {
        onChange(selectedOptions);
    }, [selectedOptions]);


    const resetInput = () => {
        setSearchInput("");
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
                    {selectedOptions.length === 0 ? null :
                        <StyledTagsContainer>
                            {selectedOptions.map((elem) => {
                                return(
                                <Tag value={elem} onClick={() => deleteSelectedOption(elem)}/>
                                );
                            })}
                        </StyledTagsContainer>
                    }

                    <StyledInputContainer>
                        <StyledInput 
                            placeholder={placeholder} 
                            onFocus={() => setShowOptions(v => !v)}
                            value={searchInput} 
                            onChange={handleChange}
                            />
                        {searchInput.length === 0 ? null :
                            <Cross onClick={resetInput}><RxCross1 /></Cross>
                        }
                    </StyledInputContainer>

                </StyledSearchContainer>

                {showOptions ? 
                <StyledOptionsContainer>
                    {React.Children.map(children, child => {
                        if (child.props.value.value.trim().toLowerCase().match(searchInput.trim().toLowerCase())) {
                            return React.cloneElement(child, {
                                isChecked: checkIfSelected(child.props.value),
                                onClick: () => changeSelectedOptions(child.props.value)
                            });
                        }
                    })}
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
    overflow-inline: auto;
    border: .5px solid #00000038;
    border-radius: 10px;
    box-shadow: 0px 0px 6px #00000037;

`;

const StyledTagsContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 5px 10px; 
    display: flex;
    flex-wrap: wrap;
    padding: 0px 10px;
    justify-content: flex-start;
    align-items: stretch;
`;

const StyledInputContainer = styled.div`
    height: 100%;
    padding: 5px;   
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


const StyledInput = styled.input`
    border: .3px solid #00000038;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    padding: 5px;
    font-size: 1em;
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
    max-height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    border: .5px solid #00000038;
    border-radius: 10px;
    box-shadow: 0px 0px 6px #00000037;
    padding: 5px 10px; 
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
        background-color: #dedede88;
        border-radius: 20px;
        width: 8px;
        -webkit-overflow-scrolling: auto !important;
        background-clip: border-box;
    }

    &::-webkit-scrollbar-thumb {
        background: #aedbff;
        border-radius: 20px;
    }
`;
