import React, { FC, useEffect } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { RxCross2 } from 'react-icons/rx';
import { RiArrowDownSLine } from 'react-icons/ri';
import Tag from "./Tag";
import { OptionProps } from "./Option";
import type * as CSS from "csstype";

export interface SelectProps extends StyleProps{
    /**
     * All available options 
     */
    values?: string[];
    /**
     * activated everytime the component is rendered
     */
    onChange: (v: string[]) => void;
    /**
     * label of Single Select
     */
    label?: string;
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

const MultipleSelect: FC<SelectProps> = ({ tagBgColor, label, onChange, children, placeholder, ...props }) => {
    const [show, setShow] = React.useState<boolean>(false);
    const [searchInput, setSearchInput] = React.useState<string>("");
    const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

    useEffect(() => {
        onChange(selectedOptions);
    }, [selectedOptions]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchInput(event.target.value);
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
            addSelectedOption(elem);
        }
        setShow(false);
    };

    const tagColor = tagBgColor !== undefined ? tagBgColor : '#2196f3';

    return(
        <Styles {...props}>
            <StyledContainer>
                <Label>{label}</Label>
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
                            onFocus={() => setShow(true)}
                            value={searchInput} 
                            onChange={handleChange}
                        />
                        {
                            searchInput.length !== 0 ?
                            <Icon onClick={resetInput}><RxCross2 size='1.2rem' /></Icon>
                            : 
                            (show ? 
                            <Icon style={{ rotate: 'x 180deg' }} onClick={() => setShow(v => !v)}><RiArrowDownSLine size='1.5rem'/></Icon>
                            :
                            <Icon onClick={() => setShow(v => !v)}><RiArrowDownSLine size='1.5rem'/></Icon>
                            )                        
                        }
                    </StyledInputContainer>

                </StyledSearchContainer>

                {show && 
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

export default MultipleSelect;

const Label = styled.h3`
    font-family: sans-serif;
    color: #555;
    margin: 5px 0;
`;

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 350px;
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    z-index: 10;
`;

const StyledSearchContainer = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: fit-content;
    padding: 5px 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-inline: auto;

    border: 3px solid #2196f3;
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
    color: black;

    &:focus {
        outline: none;
    }
`;

const Icon = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    padding-left: 5px;
`;

const StyledOptionsContainer = styled.div`
    width: 100%;
    max-height: 200px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: 0 2px 2px #cfcfcf;
    border-radius: 5px;

    &::-webkit-scrollbar {
        background-color: #dedede88;
        width: 10px;
        -webkit-overflow-scrolling: auto !important;
        background-clip: border-box;
    }

    &::-webkit-scrollbar-thumb {
        background: #a0a0a0;
        border-radius: 20px;
    }
`;
