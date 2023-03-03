import React, { FC, useCallback, useMemo } from "react";
import * as CSS from "csstype";
import CustomInput from "./CustomInput";
import styled from "styled-components";
import { hexToHsl, hslToHex } from "../../../utils";
import { floor, isNil, mapValues } from "lodash";
import Styles from "../../../utils/styles";

export interface HLSInputProps {
    color: CSS.DataType.Color;
    setColor: (value: CSS.DataType.Color) => void;
}

interface HSL {
    h?: number;
    s?: number;
    l?: number;
}

const HSLContainer = styled.div`
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

const HSLInput: FC<HLSInputProps> = ({
    color, setColor
}) => {
    const hslColor = useMemo(
        () => {
            const _hsl = hexToHsl(color);
            if (isNil(_hsl)) {
                return {
                    h: '0',
                    s: '0',
                    l: '0'
                };
            } else {
                return mapValues(_hsl, (v: number) => v.toString());
            }
        },
        [color]
    );

    const setNewColor = useCallback(
        (hsl: HSL) => {
            const _hsl = {
                ...mapValues(hslColor, (v: string) => Number(v)),
                ...mapValues(hsl, (v: number, k: string) => {
                    if (k === 'h') {
                        return (v > 360) ? floor(v / 10) : v;
                    } else {
                        return (v > 100) ? floor(v / 10) : v;
                    }
                }) as HSL
            };
            setColor(
                hslToHex(
                    _hsl.h,
                    _hsl.s,
                    _hsl.l
                )
            );
        }, [hslColor]);

    return (
        <Styles>
            <HSLContainer className={"simpleui-colorpicker-hslcontainer"}>
                <CustomInput prefix={'H'} value={hslColor.h} onChange={(v: string) => setNewColor({
                    h: Number(v)
                })} />
                <CustomInput prefix={'S'} value={parseInt(hslColor.s).toString()} onChange={(v: string) => setNewColor({
                    s: Number(v)
                })} />
                <CustomInput prefix={'L'} value={parseInt(hslColor.l).toString()} onChange={(v: string) => setNewColor({
                    l: Number(v)
                })} />
            </HSLContainer>
        </Styles>
    );
};

export default HSLInput;
