import React, { FC } from "react";
import styled from "styled-components";
import { StyleProps } from "../../utils";
import Styles from "../../utils/styles";
import { IStyledTheme } from "../../utils/theme/theme";

export interface ContainerProps extends StyleProps {
    children: React.ReactNode;
}

const ColorPickerContainer = styled.div<IStyledTheme>`
    background-color: ${ props => props.isDark ? '#ccc' : '#eee' };
    border: .5px solid #e0e0e0;
    z-index: ${ props => props.theme.zindices.popover };
    border-radius: ${ props => props.theme.sizes[1.5] };
    width: fit-content;
`;  

const Container: FC<ContainerProps> = ({
    children, ...props
}) => (
    <Styles {...props}>
        <ColorPickerContainer>
            {children}
        </ColorPickerContainer>
    </Styles>
);

export default Container;
