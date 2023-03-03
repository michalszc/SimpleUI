import React, { FC } from "react";
import * as CSS from "csstype";
import styled from "styled-components";
import { StyleProps } from "../../utils";
import Styles from "../../utils/styles";
import { isNil } from "lodash";

export interface ContainerProps extends StyleProps {
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
        background-color: ${ ({ checkedColor, theme }) =>  isNil(checkedColor) ? theme.colors.blue[300] :  checkedColor };
    }
    
    & input:focus + .simpleui-switch-slider {
        box-shadow: 0 0 1px ${ ({ checkedColor, theme }) =>  isNil(checkedColor) ? theme.colors.blue[300] :  checkedColor };
    }
    
    & input:checked + .simpleui-switch-slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
`;  

const Container: FC<ContainerProps> = ({
    children, checkedColor, ...props
}) => (
    <Styles {...props}>
        <SwitchContainer checkedColor={checkedColor} className={"simpleui-switch-container"}>
            {children}
        </SwitchContainer>
    </Styles>
);

export default Container;