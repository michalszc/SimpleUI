import React, { FC } from "react";
import styled from "styled-components";
import Styles from "../../../utils/styles";
import { IStyledTheme } from "../../../utils/theme/theme";

export interface CustomInputProps {
    prefix: string;
    value: string;
    onChange: (value: string) => void;
}

const InputContainer = styled.div<IStyledTheme>`
    display: grid;
    grid-template-columns: 22px 50px;
    color: #98A1A4;
    box-sizing: border-box;
    padding: ${ props => props.theme.sizes[3] };
    border-radius: ${ props => props.theme.sizes[1.5] };
`;

const InputPrefix = styled.div`
    background-color: #F0F0F0;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e0e0e0;
    border-right: none;
    text-transform: uppercase;
    font-family: monospace;
`;

const Input = styled.input`
    color: inherit;
    font-family: monospace;
    font-size: 14px;
    line-height: 2;
    text-transform: uppercase;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    box-shadow: #F0F0F0 0px 0px 0px 1px inset;
    border: 1px solid #e0e0e0;
    border-left: none;
    outline: none;
`;

const CustomInput: FC<CustomInputProps> = ({
    prefix, value, onChange
}) => (
    <Styles>
        <InputContainer className="simpleui-colorpicker-inputcontainer">
            <InputPrefix className="simpleui-colorpicker-input-prefix">
                { prefix }
            </InputPrefix>
            <Input value={value} onChange={(e) => onChange(e.target.value)} className="simpleui-colorpicker-input"/>
        </InputContainer>
    </Styles>
);

export default CustomInput;
