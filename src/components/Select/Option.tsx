import React, { FC, MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { OptionValue } from "../../utils/types/option";

export interface OptionProps extends StyleProps {
    /**
     * Value of the option
     */
    value: OptionValue;
   /**
    * If true -> option has been selected
    */
    isChecked?: boolean;
    /**
     * If true -> option can't be selected
     */
    isDisable?: boolean;

    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const StyledOptionContainer = styled.a<OptionProps>`
    font-family: sans-serif;
    color: #555555;
    padding: 10px 5px;
    width: 100%;
    cursor: pointer;
    transition: transform .2s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }

    ${({ isChecked }) => isChecked && css`
        font-size: 1.05em;
        color: #1d99ff;

    `}

`;

const Option: FC<OptionProps> = ({ onClick, value, isChecked, ...props }) => {
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

export default Option;
