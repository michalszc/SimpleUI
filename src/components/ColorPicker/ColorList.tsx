import React, { FC } from "react";
import * as CSS from "csstype";
import styled from "styled-components";
import ColorSelector from "./ColorSelector";
import Styles from "../../utils/styles";
import { IStyledTheme } from "../../utils/theme/theme";

export interface ColorListProps {
    colors: Array<CSS.DataType.Color>;
    shape: 'circle' | 'square' | 'roundedSquare';
    size: [number, number];
    setColor: (value: CSS.DataType.Color) => void;
}

interface IList extends IStyledTheme {
    size: [number, number];
}

const List = styled.div<IList>`
    padding: ${ ({ theme }) => theme.sizes[3] };
    display: grid;
    gap: ${ ({ theme }) => theme.sizes[1.5] };
    grid-template-rows: ${ ({ size }) => 'auto '.repeat(size.at(0)!)};
    grid-template-columns: ${ ({ size }) => 'auto '.repeat(size.at(1)!)};
`;

const ColorList: FC<ColorListProps> = ({
    colors, shape, size, setColor
}) => (
    <Styles>
        <List size={size}>
            {
                colors
                    .map((color: CSS.DataType.Color, i: number) =>
                        <ColorSelector key={i} color={color} shape={shape} setColor={setColor} />
                    )
            }
        </List>
    </Styles>
);

export default ColorList;
