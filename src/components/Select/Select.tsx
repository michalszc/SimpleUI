import React, { FC, useEffect } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { RxCross1 } from 'react-icons/rx';
import Tag from "./Tag";
import { OptionProps } from "./Option";
import type * as CSS from "csstype";

export interface SelectProps extends StyleProps{
    /**
     * All available options 
     */
    values?: string[];
    /**
     * If true, you can select multiple values
     */
    multi?: boolean;
    /**
     * activated everytime the component is rendered
     */
    onChange: (v: string[]) => void;
    /**
     * If true, option shows as unselected/selected and can't be select/unselect
     */
    isReadOnly?: boolean;
    /**
     * Text display when input section is empty
     */
    placeholder?: string;
    /**
     * costum bg color for tags
     */
    tagBgColor?: CSS.DataType.Color;
    /**
     * component's children, should be Option components
     */
    children: React.ReactElement<OptionProps> | Array<React.ReactElement<OptionProps>>;
}

const Select: FC<SelectProps> = ({ multi=true, tagBgColor, onChange, children, placeholder, ...props }) => {
    const [showOptions, setShowOptions] = React.useState<boolean>(false);
    const [searchInput, setSearchInput] = React.useState<string>("");
    const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

    useEffect(() => {
        onChange(selectedOptions);
    }, [selectedOptions]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchInput(event.target.value);
        setShowOptions(true);
    };

    const resetInput = () => {
        setSearchInput("");
    };

    const checkIfSelected = (elem: string):boolean => {
        const e = selectedOptions.filter((item) => {
           return elem === item;
        });
    
        if (e.length === 0 ) {
            return false;
        }
    
        return true;
    };

    const deleteSelectedOption = (elem: string) => {
        setSelectedOptions(selectedOptions?.filter((item: string) => { 
            return item !== elem;
        }));
    };

    const addSelectedOption = (elem: string) => {
        setSelectedOptions((selected) => [...selected, elem]);
    };

    const changeSelectedOptions = (elem: string) => {
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
        setShowOptions(false);
    };

   // const isMulti =  ;
    const tagColor = tagBgColor !== undefined ? tagBgColor : (multi === true ? '#2196f3' : '#ab47bc');

    return(
        <Styles {...props}>
            <StyledContainer>

                <StyledSearchContainer>
                    { selectedOptions.length !== 0 &&
                        <StyledTagsContainer>
                            {selectedOptions.map((elem) => 
                                <Tag bg={tagColor} value={elem} onClick={() => deleteSelectedOption(elem)}/>
                            )}
                        </StyledTagsContainer>
                    }
                    <StyledInputContainer>
                        <StyledInput 
                            placeholder={placeholder} 
                            onFocus={() => setShowOptions(true)}
                            value={searchInput} 
                            onChange={handleChange}
                        />
                        {
                            searchInput.length !== 0 &&
                            <Cross onClick={resetInput}><RxCross1 /></Cross>
                        }
                    </StyledInputContainer>

                </StyledSearchContainer>

                {showOptions && 
                <StyledOptionsContainer>
                    {React.Children.map(children, child => {
                        if (child.props.value.trim().toLowerCase().match(searchInput.trim().toLowerCase())) {
                            return React.cloneElement(child, {
                                isChecked: checkIfSelected(child.props.value),
                                onClick: () => changeSelectedOptions(child.props.value)
                            });
                        }
                    })}
                </StyledOptionsContainer>
                }

            </StyledContainer>
        </Styles>
    );
};

export default Select;

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    z-index: 10;
`;

const StyledSearchContainer = styled.div`
    background-color: #eeeeee;
    width: 100%;
    height: fit-content;
    padding: 5px 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-inline: auto;
    border: .5px solid #e0e0e0;
    border-radius: 10px;
`;

const StyledTagsContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
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
    border: .3px solid #e0e0e0;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    padding: 5px;
    font-size: 1em;
    color: #555555;
    
    background-color: transparent;
    border-radius: 0px;
    border: none;
    //border-bottom: .5px solid black;
    color: black;

        
    /* &:hover {
        border: .3px solid #c4c4c4;
    } */

    &:focus {
        //border: .3px solid #e0e0e0;
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
    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #eeeeee;
    border: .5px solid #e0e0e0;
    border-radius: 10px;
    padding: 5px 0px; 
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
        background-color: #dedede88;
        border-radius: 20px;
        width: 6px;
        -webkit-overflow-scrolling: auto !important;
        background-clip: border-box;
    }

    &::-webkit-scrollbar-thumb {
        background: #555;
        border-radius: 20px;
    }
`;
