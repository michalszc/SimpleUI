import React, { FC } from "react";
import * as CSS from "csstype";
import styled from "styled-components";
import { IStyledTheme } from "../../utils/theme/theme";
import Styles from "../../utils/styles";

export interface ColorSelectorProps {
    color: CSS.DataType.Color;
    shape: 'circle' | 'square' | 'roundedSquare';
    setColor: (value: CSS.DataType.Color) => void;
}

interface IColor 
extends IStyledTheme 
{
    color: CSS.DataType.Color;
    shape: 'circle' | 'square' | 'roundedSquare';
}

const Color = styled.div<IColor>`
    background-color: ${ props => props.color };
    border-radius: ${ ({ shape, theme }) => {
        switch (shape) {
            case 'circle':
                return '50%';
            case 'square':
                return '0';
            case 'roundedSquare':
                return theme.sizes[1];
        }
    }};
    width: ${ props => props.theme.sizes[7] };
    height: ${ props => props.theme.sizes[7] };
    cursor: pointer;
    transition: transform .2s ease-in-out;

    &:hover, &:focus {
        transform: scale(1.15);
    }
`;

const ColorSelector: FC<ColorSelectorProps> = ({
    color, shape, setColor
}) => (
    <Styles>
        <Color 
            color={color}
            shape={shape}
            onClick={() => setColor(color)}
            title={color}
            className={"simpleui-colorpicker-colorselector"}
            data-testid={'test-colorselector'}
        />
    </Styles>
);

export default ColorSelector;
