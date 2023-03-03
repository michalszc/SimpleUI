import React, { ChangeEvent, FocusEvent } from "react";
import { FC } from "react";
import * as CSS from "csstype";
import { StyleProps } from "../../utils";
import Container from "./Container";
import Slider from "./Slider";

export interface SwitchProps extends StyleProps {
    /**
     * If true, the `Switch` will be checked. The default is `false`.
     */
    isChecked?: boolean;
    /**
     * If true, the `Switch` is marked as disabled. The default is `false`.
     */
    isDisabled?: boolean;
    /**
     * If true, the `Switch` is marked as readonly. The default is `false`.
     */
    isReadonly?: boolean;
    /**
     * If true, the `Switch` is marked as required. The default is `false`.
     */
    isRequired?: boolean;
    /**
     * The callback invoked when the `Switch` is blurred (loses focus)
     * @param event
     * @returns 
     */
    onBlur?: (event: FocusEvent<HTMLInputElement, Element>) => void;
    /**
     * The callback invoked when the checked state of the `Switch` changes.
     * @param event 
     * @returns 
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    /**
     * The callback invoked when the `Switch` is focused
     * @param event 
     * @returns 
     */
    onFocus?: (event: FocusEvent<HTMLInputElement, Element>) => void;
    /**
     * This is the value that will be returned on form submission.
     */
    name?: string;
    /**
     * Shape of the switch. The default is `circle`.
     */
    shape?: 'circle' | 'square' | 'roundedSquare';
    /**
     * This is the value of checked background color of the Switch
     */
    checkedColor?: CSS.DataType.Color;
}

const Switch: FC<SwitchProps> = ({
    isChecked = false, isDisabled = false,
    isReadonly = false, isRequired = false,
    onBlur = () => {}, onChange = () => {},
    onFocus = () => {}, name = '',
    shape = 'circle', ...props
}) => (
        <Container {...props}>
            <input 
                type="checkbox"
                checked={isChecked}
                disabled={isDisabled}
                readOnly={isReadonly}
                required={isRequired}
                onBlur={onBlur}
                onChange={(e) => !isReadonly && onChange(e)}
                onFocus={onFocus}
                name={name}
            />
            <Slider shape={shape} isDisabled={isDisabled}/>
        </Container>
);

export default Switch;
