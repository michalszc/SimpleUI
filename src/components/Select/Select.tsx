import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { SlArrowDown } from 'react-icons/sl';

type Option = {
    [index: string]: string
}

export interface SelectProps extends StyleProps {
    /**
     * All available options
     */
    values?: Option;
    /**
     * Array of selected values
     */
    selectedValues?: Option[];
    /**
     * If true -> you can select multiple values
     */
    multiple?: boolean;
    /**
     * If true -> option shows as unselected/selected and can't be select/unselect
     */
    isReadOnly?: boolean;
}

const StyledContainer = styled.div<SelectProps>`
    background-color: white;
    padding: 5px 10px;
    max-width: 300px;
    min-width: 200px;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: .5px solid #00000038;
    border-radius: 10px;
    box-shadow: 0px 0px 6px #00000038;
`;

const StyledTagsContainer = styled.div`
    height: 100%;
    width: 90%;
    overflow: auto;
    white-space: nowrap;
    display: inline-block;
    //border: .5px solid black;
    `;

const Select: FC<SelectProps> = ({ values, selectedValues, multiple, ...props }) => {
    const [showOptions, setShowOptions] = useState(false);

    return(
        <Styles {...props}>
            <div>
                <StyledContainer >
                    <StyledTagsContainer></StyledTagsContainer>
                    <a onClick={() => setShowOptions(!showOptions)}><SlArrowDown /></a>
                </StyledContainer>
                {showOptions ? 
                <StyledContainer values={values}></StyledContainer>
                : null}
            </div>
        </Styles>
    );
};

export default Select;
