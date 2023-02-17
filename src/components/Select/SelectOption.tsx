import React, { FC, useState } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";

export interface SelectOptionProps extends StyleProps {
    /**
     * Value of the option
     */
    children: string;
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
        transform: scale(1.02);
    }
`;



const SelectOption: FC<SelectOptionProps> = ({ children, isChecked, ...props }) => {
    const [checked, onChangeChecked] = useState(isChecked);

    return(
        <Styles {...props}>
            <StyledOptionContainer 
                isChecked={checked} 
                onClick={(prevState) => onChangeChecked(!prevState)}
                >
                {children}
            </StyledOptionContainer>
        </Styles>
    );
};

export default SelectOption;
