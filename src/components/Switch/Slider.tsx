import React, { FC } from "react";
import styled, { css } from "styled-components";
import { StyleProps } from "../../utils";
import Styles from "../../utils/styles";

export interface DotProps extends StyleProps {
    shape: 'circle' | 'square' | 'roundedSquare';
} 

export interface SliderProps extends StyleProps {
    isDisabled: boolean;
    isReadonly: boolean;
    shape: 'circle' | 'square' | 'roundedSquare';
}

const SliderComponent = styled.span<SliderProps>`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10%;
    display: flex;
    align-items: center;
    background-color: ${ ({ theme }) =>  theme.colors.grey[500] };
    border-radius: ${ ({ shape, theme }) => {
        switch (shape) {
            case 'circle':
                return '10vh';
            case 'square':
                return '0';
            case 'roundedSquare':
                return theme.sizes[1.5];
        }
    }};

    ${({ isDisabled }) => isDisabled && css`
        opacity: 0.45;
        cursor: not-allowed;
    `}

    ${({ isReadonly }) => isReadonly && css`
        cursor: default;
    `}
`;

const Dot = styled.span<DotProps>`
    position: absolute;
    width: 40%;
    background-color: white;
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
    -webkit-transition: .4s;
    transition: .4s;

    &::before {
        content:"";
        display:block;
        margin-top: 100%;
    }
`;

const Slider: FC<SliderProps> = ({
    shape, isDisabled, isReadonly
}) => (
    <Styles>
        <SliderComponent 
            shape={shape}
            isDisabled={isDisabled}
            isReadonly={isReadonly}
            className={"simpleui-switch-slider"}
        >
            <Styles>
                <Dot shape={shape} className={"simpleui-switch-dot"}/>
            </Styles>
        </SliderComponent>
    </Styles>
);

export default Slider;
