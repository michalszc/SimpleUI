import React, { FC, useCallback, useMemo } from "react";
import * as CSS from "csstype";
import CustomInput from "./CustomInput";
import styled from "styled-components";
import { hexToHsla, hslaToHex } from "../../../utils";
import { floor, isNil, mapValues } from "lodash";
import Styles from "../../../utils/styles";

export interface HLSAInputProps {
    color: CSS.DataType.Color;
    setColor: (value: CSS.DataType.Color) => void;
}

interface HSLA {
    h?: number;
    s?: number;
    l?: number;
    a?: number;
}

const HSLAContainer = styled.div`
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

const HSLAInput: FC<HLSAInputProps> = ({
    color, setColor
}) => {
    const hslaColor = useMemo(
        () => {
            const _hsla = hexToHsla(color);
            if (isNil(_hsla)) {
                return {
                    h: '0',
                    s: '0',
                    l: '0',
                    a: '0'
                };
            } else {
                return mapValues(_hsla, (v: number) => v.toString());
            }
        },
        [color]
    );

    const setNewColor = useCallback(
        (hsla: HSLA) => {
            const _hsla = {
                ...mapValues(hslaColor, (v: string) => Number(v)),
                ...mapValues(hsla, (v: number, k: string) => {
                    if (k === 'h') {
                        return (v > 360) ? floor(v / 10) : v;
                    } else {
                        return (v > 100) ? floor(v / 10) : v;
                    }
                }) as HSLA
            };
            setColor(
                hslaToHex(
                    _hsla.h,
                    _hsla.s,
                    _hsla.l,
                    _hsla.a
                )
            );
        }, [hslaColor]);

    return (
        <Styles>
            <HSLAContainer>
                <CustomInput prefix={'H'} value={hslaColor.h} onChange={(v: string) => setNewColor({
                    h: Number(v)
                })} />
                <CustomInput prefix={'S'} value={parseInt(hslaColor.s).toString()} onChange={(v: string) => setNewColor({
                    s: Number(v)
                })} />
                <CustomInput prefix={'L'} value={parseInt(hslaColor.l).toString()} onChange={(v: string) => setNewColor({
                    l: Number(v)
                })} />
                <CustomInput prefix={'A'} value={hslaColor.a} onChange={(v: string) => setNewColor({
                    a: Number(v)
                })} />
            </HSLAContainer>
        </Styles>
    );
};

export default HSLAInput;
