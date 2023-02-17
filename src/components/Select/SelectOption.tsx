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
    padding: 50px 20px;
    width: 100%;
    cursor: pointer;
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
