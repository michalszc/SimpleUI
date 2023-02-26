import React, { FC, useEffect, useState } from "react"; 
import Styles from "../../utils/styles";
import { StyleProps } from "../../utils";
import { CheckboxProps } from "./Checkbox";

export interface ChecklistProps extends StyleProps {
    /**
     * @param v checked values 
     * @returns void
     */
    onChange: (v: string[]) => void;
    /**
     * list title
     */
    title?: string;
    /**
     * component's children, should be Checkbox components
     */
    children: React.ReactElement<CheckboxProps> | Array<React.ReactElement<CheckboxProps>>;
}

const Checklist: FC<ChecklistProps> = ({ onChange, ...props }) => {
    const [checked, setChecked] = useState<string[]>([]);

    useEffect(() => {
        onChange(checked);
    }, [checked]);

    return(
        <Styles {...props}>
            <div>

            </div>
        </Styles>
    );
};

export default Checklist;
