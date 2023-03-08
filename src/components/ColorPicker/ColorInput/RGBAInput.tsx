import React, { FC, useCallback, useMemo } from "react";
import * as CSS from "csstype";
import CustomInput from "./CustomInput";
import styled from "styled-components";
import { hexToRgba, rgbaToHex } from "../../../utils";
import { floor, isNil, mapValues } from "lodash";
import Styles from "../../../utils/styles";

export interface RGBAInputProps {
    color: CSS.DataType.Color;
    setColor: (value: CSS.DataType.Color) => void;
}

interface RGBA {
    r?: number;
    g?: number;
    b?: number;
    a?: number;
}

const RGBAContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(25%, 1fr));
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

const RGBAInput: FC<RGBAInputProps> = ({
    color, setColor
}) => {
    const rgbaColor = useMemo(
        () => {
            const _rgba = hexToRgba(color);
            if (isNil(_rgba)) {
                return {
                    r: '0',
                    g: '0',
                    b: '0',
                    a: '0'
                };
            } else {
                return mapValues(_rgba, (v: number) => v.toString());
            }
        },
        [color]
    );

    const setNewColor = useCallback(
        (rgba: RGBA) => {
            const _rgba = {
                ...mapValues(rgbaColor, (v: string) => Number(v)),
                ...mapValues(rgba, (v: number, k: string) => {
                    if (k !== 'a') {
                        return (v > 255) ? floor(v / 10) : v;
                    } else {
                        return (v > 100) ? floor(v / 10) : v;
                    }
                }) as RGBA
            };
            setColor(
                rgbaToHex(
                    _rgba.r,
                    _rgba.g,
                    _rgba.b,
                    _rgba.a
                )
            );
        }, [rgbaColor]);

    return (
        <Styles>
            <RGBAContainer className={"simpleui-colorpicker-rgbacontainer"}>
                <CustomInput prefix={'R'} value={rgbaColor.r} onChange={(v: string) => setNewColor({
                    r: Number(v)
                })} />
                <CustomInput prefix={'G'} value={rgbaColor.g} onChange={(v: string) => setNewColor({
                    g: Number(v)
                })} />
                <CustomInput prefix={'B'} value={rgbaColor.b} onChange={(v: string) => setNewColor({
                    b: Number(v)
                })} />
                <CustomInput prefix={'A'} value={rgbaColor.a} onChange={(v: string) => setNewColor({
                    a: Number(v)
                })} />
            </RGBAContainer>
        </Styles>
    );
};

export default RGBAInput;
