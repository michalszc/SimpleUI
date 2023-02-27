import React, { FC, useEffect } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { OptionProps } from "./Option";
import { RxCross2 } from 'react-icons/rx';
import { RiArrowDownSLine } from 'react-icons/ri';
import type * as CSS from "csstype";
import Tag from "./Tag";

export interface SelectProps extends StyleProps{
    /**
     * All available options 
     */
    values?: string[];
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
     * activated everytime the component is rendered
     */
    onChange: (v: string) => void;
    /**
       * component's children, should be Option components
       */
    children: React.ReactElement<OptionProps> | Array<React.ReactElement<OptionProps>>;
}

const SingleSelect: FC<SelectProps> = ({ onChange, tagBgColor, placeholder, children, label,  ...props }) => {
    const [searchInput, setSearchInput] = React.useState<string>("");
    const [selectedOption, setSelectedOption] = React.useState<string>("");
    const [show, setShow] = React.useState<boolean>(false);

    useEffect(() => {
        onChange(selectedOption);
    }, [selectedOption]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchInput(event.target.value);
    };

    const resetInput = () => {
        setSearchInput("");
    };

    const checkIfSelected = (elem: string):boolean => {
        const isSelected = selectedOption === elem ? true : false;

        return isSelected;
    };

    const deleteSelectedOption = () => {
        setSelectedOption("");
    };

    const addSelectedOption = (elem: string) => {
        setSelectedOption(elem);
    };

    const changeSelectedOptions = (elem: string) => {
        if (checkIfSelected(elem)) {
            deleteSelectedOption();
        } 
        else {
            addSelectedOption(elem);
        }
        setShow(v => !v);
    };

    const tagColor = tagBgColor !== undefined ? tagBgColor : '#2196f3';

    return(
        <Styles {...props}>

            <MainContainer>
                <Label>{label}</Label>
                <SelectOptionContainer>
                {
                    selectedOption.length > 0 ?
                    <StyledInputContainer>
                        <Tag marginLeft={'5px'} bg={tagColor} value={selectedOption} onClick={() => deleteSelectedOption()}/>
                    </StyledInputContainer>
                    :   
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
                }
                </SelectOptionContainer>

                {
                    show &&
                    <OptionsList>
                        {React.Children.map(children, child => {
                            if (child.props.value.trim().toLowerCase().match(searchInput.trim().toLowerCase())) {
                                return React.cloneElement(child, {
                                    isChecked: checkIfSelected(child.props.value),
                                    onClick: () => changeSelectedOptions(child.props.value)
                                });
                            }
                        })}
                    </OptionsList>
                }

            </MainContainer>

        </Styles>
    );
};

export default SingleSelect;

const Label = styled.h3`
    font-family: sans-serif;
    color: #555;
    margin: 5px 0;
`;

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    min-width: 300px;
    width: fit-content;
    box-sizing: border-box;
    height: auto;
    z-index: 10;
`;

const SelectOptionContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
    border: 3px solid #2196f3;
    border-radius: 10px;
    background-color: #ffffff;
`;

const StyledInputContainer = styled.div`
    height: 100%;  
    width: 100%;
    box-sizing: border-box;
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
    padding: 10px;
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

const OptionsList = styled.div`
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

