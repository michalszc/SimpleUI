import React, { FC } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { OptionProps } from "./Option";

export interface OptionsListProps extends StyleProps {
    checkIfSelectedFunction: (v: string) => boolean;
    updateSelectedOptionsFunction: (v: string) => void;
    searchInput: string;
    children: React.ReactElement<OptionProps> | Array<React.ReactElement<OptionProps>>;
}

const OptionsList: FC<OptionsListProps> = ({ checkIfSelectedFunction, updateSelectedOptionsFunction, searchInput, children, ...props }) => {
    return(
        <Styles {...props}>
            <StyledOptionsContainer className="simpleui-select-optionslist">
                {React.Children.map(children, child => {
                        if (child.props.value.trim().toLowerCase().match(searchInput.trim().toLowerCase())) {
                            return React.cloneElement(child, {
                                isChecked: checkIfSelectedFunction(child.props.value),
                                onClick: () => updateSelectedOptionsFunction(child.props.value)
                            });
                        }
                })}
            </StyledOptionsContainer>
        </Styles>
    );
};

export default OptionsList;

const StyledOptionsContainer = styled.div`
    width: 100%;
    max-height: 200px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: 0 2px 2px #cfcfcf;
    border-radius: 5px;

    &::-webkit-scrollbar {
        background-color: #dedede88;
        width: 10px;
        -webkit-overflow-scrolling: auto !important;
        background-clip: border-box;
    }

    &::-webkit-scrollbar-thumb {
        background: #a0a0a0;
        border-radius: 20px;
    }
`;
