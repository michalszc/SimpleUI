import React, { FC } from "react";
import * as CSS from "csstype";
import styled from "styled-components";
import { BaseProps, StyleProps } from "../../utils";
import Styles from "../../utils/styles";
import { isNil } from "lodash";

export interface ContainerProps extends BaseProps, StyleProps {
    checkedColor?: CSS.DataType.Color;
    children: React.ReactNode;
}

const SwitchContainer = styled.label<ContainerProps>`
    width: 60px;
    height: 34px;
    position: relative;
    display: inline-block;

    & input {
        display: none;
    }

    & input:checked + .simpleui-switch-slider {
        background-color: ${ ({ checkedColor, theme, mode }) =>  isNil(checkedColor) ? (
            mode === 'dark' ?  theme.palette.primary.dark : theme.palette.primary.light
        ) :  checkedColor };
    }
    
    & input:focus + .simpleui-switch-slider {
        box-shadow: 0 0 1px ${ ({ checkedColor, theme, mode }) =>  isNil(checkedColor) ? (
            mode === 'dark' ?  theme.palette.primary.dark : theme.palette.primary.light
        ) :  checkedColor };
    }
    
    & input:checked + .simpleui-switch-slider > .simpleui-switch-dot {
        -webkit-transform: translateX(100%);
        -ms-transform: translateX(100%);
        transform: translateX(100%);
    }
`;  

const Container: FC<ContainerProps> = ({
    children, checkedColor, ...props
}) => (
    <Styles {...props}>
        <SwitchContainer
            checkedColor={checkedColor}
            className={"simpleui-switch-container"} 
            data-testid={'test-switchcontainer'}
        >
            {children}
        </SwitchContainer>
    </Styles>
);

export default Container;
