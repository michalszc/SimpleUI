import React, { FC } from "react";
import styled from "styled-components";
import { BaseProps, StyleProps } from "../../utils";
import Styles from "../../utils/styles";

export interface FormLabelProps extends StyleProps, BaseProps {
    /**
     * This is the id of the element the FormLabel is bound to
     */
    htmlFor?: string;
    children?: React.ReactNode;
}

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const FormLabel: FC<FormLabelProps> = ({
    htmlFor, children, ...props
}) => (
    <Styles {...props}>
        <Label htmlFor={htmlFor}>
            {children}
        </Label>
    </Styles>
);

export default FormLabel;
