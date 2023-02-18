import React, { FC, useState } from "react";
import styled, { css } from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";

type Option = {
    index: string;
    value: string;
}

export interface SelectOptionProps extends StyleProps {
    /**
     * Value of the option
     */
    value: Option;
   /**
    * If true -> option has been selected
    */
    isChecked?: boolean;
    /**
     * If true -> option can't be selected
     */
    isDisable?: boolean;
    /**
     * If true -> option must be selected
     */
    isRequired?: boolean;
}

const StyledOptionContainer = styled.div<SelectOptionProps>`
    font-family: sans-serif;
    color: #555555;
    padding: 10px 10px;
    width: 100%;
    cursor: pointer;
    transition: transform .3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    ${({ isChecked }) => isChecked && css`
        font-size: 1.05em;
        color: #1d99ff;

    `}

`;

const SelectOption: FC<SelectOptionProps> = ({ value, isChecked, ...props }) => {
    const [checked, onChangeChecked] = useState(isChecked);
    
    return(
        <Styles {...props}>
            <StyledOptionContainer 
                value={value}
                isChecked={checked} 
                key={value.index}
                onClick={() => {onChangeChecked(!checked);}}
                >
                {value.value}
            </StyledOptionContainer>
        </Styles>
    );
};

export default SelectOption;
