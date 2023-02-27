import React, { FC, MouseEventHandler } from "react"; 
import Styles from "../../utils/styles";
import { StyleProps } from "../../utils";
import styled from "styled-components";

export interface CheckboxProps extends StyleProps {
    /**
     * @param value checkbox's values 
     * @returns void
     */
    onClick: MouseEventHandler<HTMLAnchorElement>;
    /**
     * list title
     */
    value?: string;
    /**
     * If true, this option is checked
     */
    isChecked?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ onClick, value, isChecked=false, ...props }) => {
    return(
        <Styles {...props}>
            <StyledContainer>
                {isChecked ? <Checked onClick={onClick}/>
                : <Check onClick={onClick}/>
                }
                {value}
            </StyledContainer>
        </Styles>
    );
};

export default Checkbox;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 30px;
    width: 400px;
    font-family: sans-serif;
    font-size: 1.1em;
    color: #555;
`;

const Check = styled.a<CheckboxProps>`
    height: 50%;
    margin-right: 10px;
    aspect-ratio: 1;
    border-radius: 5px;
    border: 2px solid #555;
`;

const Checked = styled(Check)`
    border-color: '#2196f3';
`;
