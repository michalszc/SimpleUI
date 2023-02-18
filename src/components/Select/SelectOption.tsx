import React, { FC, MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { Option } from ".";

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
    onClick: MouseEventHandler<HTMLAnchorElement>;
}

const StyledOptionContainer = styled.a<SelectOptionProps>`
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

const SelectOption: FC<SelectOptionProps> = ({ onClick, value, isChecked, ...props }) => {
    return(
        <Styles {...props}>
            <StyledOptionContainer 
                value={value}
                isChecked={isChecked} 
                key={value.index}
                onClick={onClick}>
                {value.value}
            </StyledOptionContainer>
        </Styles>
    );
};

export default SelectOption;
