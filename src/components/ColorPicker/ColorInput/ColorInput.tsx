import React, { FC } from "react";
import * as CSS from "csstype";
import HexInput from "./HexInput";
import RGBInput from "./RGBInput";

export interface ColorInputProps {
    type: 'hex' | 'hsl' | 'hsla' | 'rgb' | 'rgba';
    color: CSS.DataType.Color;
    setColor: (value: CSS.DataType.Color) => void;
}

const ColorInput: FC<ColorInputProps> = ({
    type, color, setColor
}) => {
    if (type === 'hex') {
        return (
            <HexInput color={color} setColor={setColor} />
        );
    }

    if (type === 'rgb') {
        return (
            <RGBInput color={color} setColor={setColor} />
        );
    }

    return (
        <></>
    );
}

export default ColorInput;
