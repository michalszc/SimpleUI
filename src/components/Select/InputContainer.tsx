import React, { FC } from "react";
import styled from "styled-components";
import { BaseProps } from "../../utils";
import { RxCross2 } from 'react-icons/rx';
import { RiArrowDownSLine } from 'react-icons/ri';
import Styles, { StyleProps } from "../../utils/styles";

export interface InputContainerProps extends BaseProps, StyleProps, InputProps {
    input?: string;
    resetInput?: () => void;
    isCrossVisible?: boolean;
    isArrowVisible?: boolean;
    onArrowClick?: () => void;
}

interface InputProps {
    placeholder?: string;
    onFocus?: () => void ;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputContainer: FC<InputContainerProps> = ({ 
    placeholder, input = "", isCrossVisible = false,
    onChange, onFocus, isArrowVisible = false,
    resetInput, onArrowClick, ...props }) => (
    <Styles {...props}>
        <Container>
            <Input 
                placeholder={placeholder} 
                onFocus={onFocus}
                value={input} 
                onChange={onChange}
                className="simpleui-select-input"
            />
            {   
                isCrossVisible && 
                <Icon onClick={resetInput}><RxCross2 size='1.2rem' /></Icon> 
            }
            {
                isArrowVisible ? 
                <Icon style={{ rotate: 'x 180deg' }} onClick={onArrowClick}>
                    <RiArrowDownSLine size='1.5rem'/>
                </Icon>
                :
                <Icon onClick={onArrowClick}>
                    <RiArrowDownSLine size='1.5rem'/>
                </Icon>
            }  
        </Container>
    </Styles>
);

export default InputContainer;

const Container = styled.div`
    height: 100%;  
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Input = styled.input<InputContainerProps>`
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
