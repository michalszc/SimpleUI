import React, { FC, useEffect, useMemo, useState } from "react";
import * as CSS from "csstype";
import { StyleProps } from "../../utils";
import { Colors } from "../../constants";
import Header from "./Header";
import Container from "./Container";
import { ceil, isUndefined } from "lodash";
import ColorList from "./ColorList";

export const predefinedColors = [
    Colors.red[500],
    Colors.pink[500],
    Colors.purple[500],
    Colors.deepPurple[500],
    Colors.indigo[500],
    Colors.blue[500],
    Colors.lightBlue[500],
    Colors.cyan[500],
    Colors.teal[500],
    Colors.green[500],
    Colors.lightGreen[500],
    Colors.lime[500],
    Colors.yellow[500],
    Colors.amber[500],
    Colors.orange[500],
    Colors.deepOrange[500],
    Colors.brown[500],
    Colors.grey[500],
    Colors.blueGrey[500],
    Colors.black,
    Colors.white
];

export interface ColorPickerProps extends StyleProps {
    /**
     * Array of colors to display.
     */
    colors?: Array<CSS.DataType.Color>;
    /**
     * Selected color.
     */
    selectedColor?: CSS.DataType.Color;
    /**
     * Shape of the color cell. The default is `circle`.
     */
    shape?: 'circle' | 'square' | 'roundedSquare';
    /**
     * Number of elements in a row. The default is `4`.
     */
    row?: number;
    /**
     * Number of elements in a column.
     */
    column?: number;
    /**
     *  Number of elements in a row and a column - [row, column]
     */
    size?: [number, number];
    /**
     * Position of the pointer. The default is `top`.
     */
    pointer?: string;
    /**
     * Specify whether to display the header.
     */
    header?: boolean;
    /**
     * Function called on change selected color.
     */
    onChange?: (value: CSS.DataType.Color) => void;
}

const ColorPicker: FC<ColorPickerProps> = ({
    colors = predefinedColors, selectedColor = colors.at(0), 
    shape = 'circle', row, column, size, 
    pointer, header = false, 
    onChange = () => {}, ...props
}) => {
    const [color, setColor] = useState<CSS.DataType.Color>(selectedColor!);
    const arraySize = useMemo(() => {
        if (!isUndefined(size)) {
            return size;
        } else if (!isUndefined(row) && !isUndefined(column)) {
            return [row, column];
        } else if (!isUndefined(row)) {
            return [row, ceil(colors.length / row)];
        } else if (!isUndefined(column)) {
            return [ceil(colors.length / column), column];
        } else {
            return [4, ceil(colors.length / 4)];
        }
    }, [row, column, size]) as [number, number];

    useEffect(() => {
        onChange(color);
    }, [color]);

    return (
        <Container {...props}>
            {header && <Header color={color} />}
            <ColorList colors={colors} shape={shape} size={arraySize} setColor={setColor} />
        </Container>
    )
}

export default ColorPicker;
