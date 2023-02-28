import React, { FC, useEffect, useMemo, useState } from "react";
import * as CSS from "csstype";
import { StyleProps } from "../../utils";
import { Colors } from "../../constants";
import Header from "./Header";
import Container from "./Container";
import { ceil, floor, isEmpty, isUndefined } from "lodash";
import ColorList from "./ColorList";
import { ColorInput } from "./ColorInput";

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
    Colors.black
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
     *  Number of elements in a row and a column
     */
    size?: [row: number, column: number];
    /**
     * Specify whether to display the header.
     */
    header?: boolean;
    /**
     * Specify whether the eyedropper tool should be displayed.
     * 
     * **NOTE**, if the browser doesn't support it, it won't be displayed even if you set this variable to true.
     */
    eyeDropper?: boolean;
    /**
     * Specify whether to display the input. The default is `hex`.
     */
    input?: 'hex' | 'hsl' | 'hsla' | 'rgb' | 'rgba' | 'hide';
    /**
     * Function called on change selected color.
     */
    onChange?: (value: CSS.DataType.Color) => void;
}

const ColorPicker: FC<ColorPickerProps> = ({
    colors = predefinedColors, selectedColor = colors[0], 
    shape = 'circle', row, column, size,
    eyeDropper = false, header = false, input = 'hex',
    onChange = () => {}, ...props // eslint-disable-line @typescript-eslint/no-empty-function
}) => {
    
    if (isEmpty(colors)) {
        console.error('Colors array should contain at least one item'); // eslint-disable-line no-console
        return <></>;
    }

    const [color, setColor] = useState<CSS.DataType.Color>(
        colors.includes(selectedColor) ? selectedColor : colors[0]
    );
    const arraySize = useMemo(() => {

        const _size: number[] = [];
        if (!isUndefined(size)) {
            _size.push(size[0] > 0 ? floor(size[0]) : 4);
            _size.push(size[1] > 0 ? floor(size[1]) : 4);
            if (size.some((v: number) => v <= 0)) {
                console.error('Size should contain numbers greater than 0'); // eslint-disable-line no-console
            }
        }

        let _row = 4;
        if (!isUndefined(row)) {
            if (row > 0) {
                _row = floor(row);
            } else {
                console.error('Row should be greater than 0'); // eslint-disable-line no-console
            }
        }

        let _column = 4;
        if (!isUndefined(column)) {
            if (column > 0) {
                _column = floor(column);
            } else {
                console.error('Column should be greater than 0'); // eslint-disable-line no-console
            }
        }

        if (!isUndefined(size)) {
            return _size;
        } else if (!isUndefined(row) && !isUndefined(column)) {
            return [_row, _column];
        } else if (!isUndefined(row)) {
            return [_row, ceil(colors.length / _row)];
        } else if (!isUndefined(column)) {
            return [ceil(colors.length / _column), _column];
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
            <ColorList colors={colors} shape={shape} size={arraySize} setColor={setColor} eyeDropper={eyeDropper}/>
            {input !== 'hide' && <ColorInput type={input} color={color} setColor={setColor}/>}
        </Container>
    );
};

export default ColorPicker;
