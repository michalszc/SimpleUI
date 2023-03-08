import { StyleProps } from "../styles";
import {
    IPalette, ITypography, IBreakpoints, ISizes
} from "../../constants";

// FUTURE
export interface BreakpointsMethods {
    up: (key: string) => string; // media query
    down: (key: string) => string; // media query
    equal: (key: string) => string; // media query
    not: (key: string) => string; // media query 
    between: (key: string) => string; // media query
}

interface DefaultProps {
    [index: string]: string;
}

interface ComponentVariants
extends StyleProps {
    defaultProps: DefaultProps;
}

interface Component {
    variants: ComponentVariants;
}

interface Components {
    // name of the component
    [index: string]: Component;
}

interface Theme {
    palette?: IPalette;
    typography?: ITypography;
    breakpoints?: IBreakpoints;
    sizes?: ISizes;
    components?: Components;
}

export default Theme;

export interface IStyledTheme {
    isDark?: boolean;
    theme?: Theme;
}
