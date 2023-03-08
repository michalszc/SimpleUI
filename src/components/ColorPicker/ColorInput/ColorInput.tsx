import React, { FC } from "react";
import * as CSS from "csstype";
import HexInput from "./HexInput";
import RGBInput from "./RGBInput";
import RGBAInput from "./RGBAInput";
import HSLAInput from "./HSLAInput";
import HSLInput from "./HSLInput";

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

    if (type === 'rgba') {
        return (
            <RGBAInput color={color} setColor={setColor} />
        );
    }

    if (type === 'hsl') {
        return (
            <HSLInput color={color} setColor={setColor} />
        );
    }

    if (type === 'hsla') {
        return (
            <HSLAInput color={color} setColor={setColor} />
        );
    }

    return (
        <></>
    );
};

export default ColorInput;
