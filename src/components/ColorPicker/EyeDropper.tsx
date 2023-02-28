import React, { FC } from "react";
import * as CSS from "csstype";
import styled from "styled-components";
import { IStyledTheme } from "../../utils/theme/theme";
import Styles from "../../utils/styles";
import { FaEyeDropper } from 'react-icons/fa';

export interface EyeDropperProps {
    shape: 'circle' | 'square' | 'roundedSquare';
    setColor: (value: CSS.DataType.Color) => void;
}

interface IDropper 
extends IStyledTheme 
{
    shape: 'circle' | 'square' | 'roundedSquare';
}

const Dropper = styled.div<IDropper>`
    background-color: #CCC;
    color: #EEE;
    border-radius: ${ ({ shape, theme }) => {
        switch (shape) {
            case 'circle':
                return '50%';
            case 'square':
                return '0';
            case 'roundedSquare':
                return theme.sizes[1];
        }
    }};
    width: ${ props => props.theme.sizes[7] };
    height: ${ props => props.theme.sizes[7] };
    cursor: pointer;
    transition: transform .2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover, &:focus {
        transform: scale(1.15);
    }
`;

const EyeDropper: FC<EyeDropperProps> = ({
    shape, setColor
}) => {
    
    if (!window.EyeDropper) {
        return <></>;
    }

    return (
        <Styles>
            <Dropper shape={shape} onClick={() => {
                  const eyeDropper = new window.EyeDropper!(); // eslint-disable-line @typescript-eslint/no-non-null-assertion

                  eyeDropper
                    .open()
                    .then((result) => setColor(result.sRGBHex))
                    .catch((e) => console.error('EyeDropper: ', e)); // eslint-disable-line no-console
            }} title={'EyeDropper'} data-testid={'test-eyedropper'} >
                <FaEyeDropper />
            </Dropper>
        </Styles>
    );
};

export default EyeDropper;
