import React, { FC } from "react";
import styled, { css } from "styled-components";
import { StyleProps } from "../../utils";
import Styles from "../../utils/styles";

export interface SliderProps extends StyleProps {
    isDisabled: boolean;
    shape: 'circle' | 'square' | 'roundedSquare';
}

const SliderComponent = styled.span<SliderProps>`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${ ({ theme }) =>  theme.colors.grey[500] };
    border-radius: ${ ({ shape, theme }) => {
        switch (shape) {
            case 'circle':
                return '34px';
            case 'square':
                return '0';
            case 'roundedSquare':
                return theme.sizes[1.5];
        }
    }};
    -webkit-transition: .4s;
    transition: .4s;

    &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
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
    }

    ${({ isDisabled, theme }) => isDisabled && css`
        opacity: 0.45;
        cursor: not-allowed;
    `}
`;  

// !important;

const Slider: FC<SliderProps> = ({
    shape, isDisabled, ...props
}) => (
    <Styles>
        <SliderComponent shape={shape} isDisabled={isDisabled} className={"simpleui-switch-slider"}/>
    </Styles>
);

export default Slider;