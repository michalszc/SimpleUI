import React, { FC, MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";

export interface OptionProps extends StyleProps {
    /**
     * Value of the option
     */
    value: string;
   /**
    * If true, this option is selected
    */
    isChecked?: boolean;
    /**
     * If true, this option can't be selected
     */
    isDisable?: boolean;
    /**
     * onClick event handler, fired when Option is clicked
     */
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}


const StyledOptionContainer = styled.a<OptionProps>`
    font-family: sans-serif;
    color: #555555;
    padding: 10px 0 10px 15px;
    width: 100%;
    font-size: 1.1rem;
    cursor: pointer;

    &:hover{
        background-color: #d8d8d84e;
    }

    ${({ isChecked }) => isChecked && css`
        color: #2196f3;
    `}

`;

const Option: FC<OptionProps> = ({ onClick, value, isChecked = false, ...props }) => {
    return(
        <Styles {...props}>
            <StyledOptionContainer 
                value={value}
                isChecked={isChecked} 
                onClick={onClick}>
                {value}
            </StyledOptionContainer>
        </Styles>
    );
};

export default Option;
