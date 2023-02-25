import React, { FC } from "react";
import * as CSS from "csstype";
import CustomInput from "./CustomInput";
import styled from "styled-components";

export interface HexInputProps {
    color: CSS.DataType.Color;
    setColor: (value: CSS.DataType.Color) => void;
}

const HexContainer = styled.div`
    display: grid;
    justify-content: center;
    & > .simpleui-colorpicker-inputcontainer {
        grid-template-columns: 22px 70px;
    }
`;

const HexInput: FC<HexInputProps> = ({
    color, setColor
}) => (
    <HexContainer>
        <CustomInput prefix={'#'} value={color.replace('#', '')} onChange={(value: string) => setColor(`#${value}`)} />
    </HexContainer>
);

export default HexInput;
