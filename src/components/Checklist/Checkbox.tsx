import React, { FC, MouseEventHandler } from "react"; 
import Styles from "../../utils/styles";
import { StyleProps } from "../../utils";

export interface CheckboxProps extends StyleProps {
    /**
     * @param value checkbox's values 
     * @returns void
     */
    onClick: MouseEventHandler<HTMLAnchorElement>;
    /**
     * list title
     */
    value: string;
    /**
     * If true, this option is checked
     */
    isChecked: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ onClick, value, isChecked=false, ...props }) => {
    return(
        <Styles {...props}>
            <div>

            </div>
        </Styles>
    );
};

export default Checkbox;
