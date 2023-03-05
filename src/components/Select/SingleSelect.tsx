import React, { FC, useEffect } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { OptionProps } from "./Option";
import { RxCross2 } from 'react-icons/rx';
import { RiArrowDownSLine } from 'react-icons/ri';
import OptionsList from './OptionsList';

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
     * activated everytime the component is rendered
     */
    onChange: (v: string) => void;
    /**
     * component's children, should be Option components
     */
    children: React.ReactElement<OptionProps> | Array<React.ReactElement<OptionProps>>;
}

const SingleSelect: FC<SelectProps> = ({ onChange, placeholder, children, label,  ...props }) => {
    const [searchInput, setSearchInput] = React.useState<string>("");
    const [input, setInput] = React.useState<string>("");
    const [selectedOption, setSelectedOption] = React.useState<string>("");
    const [show, setShow] = React.useState<boolean>(false);

    useEffect(() => {
        onChange(selectedOption);
    }, [selectedOption]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setInput(event.target.value);
        setSearchInput(event.target.value);
    };

    const resetInput = () => {
        setSearchInput("");
        setInput("");
        deleteSelectedOption();
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
        setInput(elem);
        setSearchInput("");
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

    return(
            <MainContainer>
                {label && <Label>{label}</Label> }
                <Styles {...props}>
                    <SelectOptionContainer className="simpleui-select">

                        <StyledInputContainer className="simpleui-select-inputcontainer">
                            <StyledInput 
                                placeholder={placeholder} 
                                onFocus={() => setShow(true)}
                                value={input} 
                                onChange={handleChange}
                                className="simpleui-select-input"
                            />
                            {   
                                searchInput.length !== 0 || selectedOption.length !== 0 && 
                                <Icon onClick={resetInput}><RxCross2 size='1.2rem' /></Icon> 
                            }
                            {
                                show ? 
                                <Icon style={{ rotate: 'x 180deg' }} onClick={() => setShow(v => !v)}><RiArrowDownSLine size='1.5rem'/></Icon>
                                :
                                <Icon onClick={() => setShow(v => !v)}><RiArrowDownSLine size='1.5rem'/></Icon>
                            }                        
                        
                        </StyledInputContainer>

                    </SelectOptionContainer>
                </Styles>

                {show && 
                    <OptionsList 
                        updateSelectedOptionsFunction={changeSelectedOptions}
                        checkIfSelectedFunction={checkIfSelected}
                        children={children}
                        searchInput={searchInput}
                    />
                }
            </MainContainer>
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
    background-color: transparent;
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

