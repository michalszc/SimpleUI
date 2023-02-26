import React, { FC } from "react";
import * as CSS from "csstype";
import styled from "styled-components";
import ColorSelector from "./ColorSelector";
import Styles from "../../utils/styles";
import { IStyledTheme } from "../../utils/theme/theme";
import EyeDropper from "./EyeDropper";

export interface ColorListProps {
    colors: Array<CSS.DataType.Color>;
    shape: 'circle' | 'square' | 'roundedSquare';
    size: [number, number];
    eyeDropper: boolean;
    setColor: (value: CSS.DataType.Color) => void;
}

interface IList extends IStyledTheme {
    size: [number, number];
}

const List = styled.div<IList>`
    padding: ${ ({ theme }) => theme.sizes[3] };
    display: grid;
    gap: ${ ({ theme }) => theme.sizes[1.5] };
    grid-template-rows: ${ ({ size }) => 'auto '.repeat(size[0])};
    grid-template-columns: ${ ({ size }) => 'auto '.repeat(size[1])};
    align-items: center;
    justify-items: center;
`;

const ColorList: FC<ColorListProps> = ({
    colors, shape, size, setColor, eyeDropper
}) => (
    <Styles>
        <List size={size}>
            {
                colors
                    .map((color: CSS.DataType.Color) =>
                        <ColorSelector key={color} color={color} shape={shape} setColor={setColor} />
                    )
            }
            {eyeDropper && <EyeDropper shape={shape} setColor={setColor}/>}
        </List>
    </Styles>
);

export default ColorList;
