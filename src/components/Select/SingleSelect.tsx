import React, { FC, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { OptionProps } from "./Option";
import { RxCross2 } from 'react-icons/rx';
import { RiArrowDownSLine } from 'react-icons/ri';
import OptionsList from './OptionsList';

export interface SelectProps extends StyleProps{
    /**
     * Text display when input section is empty
     */
    placeholder?: string;
    /**
     * selected option     
     * */
    selected?: string;
    /**
     * activated everytime the component is rendered
     */
    onChange: (v: string) => void;
    /**
     * component's children, should be Option components
     */
    children: React.ReactElement<OptionProps> | Array<React.ReactElement<OptionProps>>;
}

interface MainContainerProps {
    show: boolean;
}

const SingleSelect: FC<SelectProps> = ({ onChange, selected = "", placeholder, children,  ...props }) => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [input, setInput] = useState<string>("");
    const [selectedOption, setSelectedOption] = useState<string>(selected);
    const [show, setShow] = useState<boolean>(false);

    const showCross = useMemo(
       () => searchInput.length !== 0 || selectedOption.length !== 0
    , [searchInput, selectedOption]);

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
        <Styles {...props}>
            <MainContainer show={show}>
                <InputContainer className="simpleui-select-inputcontainer">
                    <Input 
                        placeholder={placeholder} 
                        onFocus={() => setShow(true)}
                        value={input} 
                        onChange={handleChange}
                        className="simpleui-select-input"
                    />
                    {   
                        showCross && 
                        <Icon onClick={resetInput}><RxCross2 size='1.2rem' /></Icon> 
                    }
                    {
                        show ? 
                        <Icon style={{ rotate: 'x 180deg' }} onClick={() => setShow(v => !v)}><RiArrowDownSLine size='1.5rem'/></Icon>
                        :
                        <Icon onClick={() => setShow(v => !v)}><RiArrowDownSLine size='1.5rem'/></Icon>
                    }                        
                
                </InputContainer>

                {show && 
                    <OptionsList 
                        updateSelectedOptionsFunction={changeSelectedOptions}
                        checkIfSelectedFunction={checkIfSelected}
                        children={children}
                        searchInput={searchInput}
                    />
                }
            </MainContainer>
        </Styles>
    );
};

export default SingleSelect;

const MainContainer = styled.div<MainContainerProps>`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border: .3px solid #a8a8a8;
    border-radius: 5px;
    flex-direction: column;
    min-width: 300px;
    width: fit-content;
    box-sizing: border-box;
    background-color: transparent;
    height: auto;
    z-index: 10;
`;

const InputContainer = styled.div`
    height: 100%;  
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Input = styled.input`
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

