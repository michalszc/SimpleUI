import React, { FC, MouseEventHandler } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { RxCross1 } from 'react-icons/rx';
import { Option } from ".";

export interface TagProps extends StyleProps {
    /**
     * Object of Option type {
     *  index: string
     *  value: string
     * }
     */
    value: Option;
    /**
     * onClick event handler -> fire when 'x' icon has been clicked
     */
    onClick: MouseEventHandler<HTMLAnchorElement>;
}

const StyledTag = styled.div`
    width: auto;
    height: 40%;
    background-color: #3ea8ff9a;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    font-family: sans-serif;
    font-size: .9em;
    color: white;
    margin-right: 5px;
`;

const Cross = styled.a`
    cursor: pointer;
    padding-left: 5px;
`;

const Tag: FC<TagProps> = ({ value, onClick , ...props }) => {
    return(
        <Styles {...props}>
            <StyledTag key={value.index}>
                {value.value}
                <Cross onClick={onClick}><RxCross1 color="white" /></Cross>
            </StyledTag>
        </Styles>
    );
};

export default Tag;

