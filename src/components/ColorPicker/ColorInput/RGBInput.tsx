import React, { FC, useCallback, useMemo } from "react";
import * as CSS from "csstype";
import CustomInput from "./CustomInput";
import styled from "styled-components";
import { hexToRgb, rgbToHex } from "../../../utils";
import { floor, isNil, mapValues } from "lodash";
import Styles from "../../../utils/styles";

export interface RGBInputProps {
    color: CSS.DataType.Color;
    setColor: (value: CSS.DataType.Color) => void;
}

interface RGB {
    r?: number;
    g?: number;
    b?: number;
}

const RGBContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(33%, 1fr));
    width: inherit;
    margin: 0 auto;
    & > .simpleui-colorpicker-inputcontainer {
        padding: ${ props => props.theme.sizes[2] };
    }
    & > .simpleui-colorpicker-inputcontainer:not(:first-of-type) {
        padding-left: ${ props => props.theme.sizes[.5] };
    }
    & > .simpleui-colorpicker-inputcontainer:not(:last-of-type) {
        padding-right: ${ props => props.theme.sizes[.5] };
    }
`;

const RGBAInput: FC<RGBInputProps> = ({
    color, setColor
}) => {
    const rgbColor = useMemo(
        () => {
            const _rgb = hexToRgb(color);
            if (isNil(_rgb)) {
                return {
                    r: '0',
                    g: '0',
                    b: '0'
                };
            } else {
                return mapValues(_rgb, (v: number) => v.toString());
            }
        },
        [color]
    );

    const setNewColor = useCallback(
        (rgb: RGB) => {
            const _rgb = {
                ...mapValues(rgbColor, (v: string) => Number(v)),
                ...mapValues(rgb, (v: number) => 
                    (v > 255) ? floor(v / 10) : v
                ) as RGB
            };
            setColor(
                rgbToHex(
                    _rgb.r,
                    _rgb.g,
                    _rgb.b,
                )
            );
        }, [rgbColor]);

    return (
        <Styles>
            <RGBContainer>
                <CustomInput prefix={'R'} value={rgbColor.r} onChange={(v: string) => setNewColor({
                    r: Number(v)
                })} />
                <CustomInput prefix={'G'} value={rgbColor.g} onChange={(v: string) => setNewColor({
                    g: Number(v)
                })} />
                <CustomInput prefix={'B'} value={rgbColor.b} onChange={(v: string) => setNewColor({
                    b: Number(v)
                })} />
            </RGBContainer>
        </Styles>
    );
};

export default RGBAInput;
