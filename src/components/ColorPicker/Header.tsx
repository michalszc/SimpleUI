import React, { FC } from "react";
import * as CSS from "csstype";
import styled from "styled-components";
import Styles from "../../utils/styles";
import { IStyledTheme } from "../../utils/theme/theme";

export interface HeaderProps {
    color: CSS.DataType.Color;
}

interface IColorPickerHeader extends IStyledTheme {
    color: CSS.DataType.Color;
}

const ColorPickerHeader = styled.div<IColorPickerHeader>`
    background-color: ${ props => props.color };
    max-width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: ${ props => props.theme.sizes[5] };
    box-sizing: border-box;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    color: white;
    font-size: ${ props => props.theme.sizes[6] };
    font-weight: bold;
    font-family: monospace;
    text-transform: uppercase;
`;

const Header: FC<HeaderProps> = ({
    color
}) => (
    <Styles>
        <ColorPickerHeader color={color} className={"simpleui-colorpicker-header"}>
            {color}
        </ColorPickerHeader>
    </Styles>
);

export default Header;
