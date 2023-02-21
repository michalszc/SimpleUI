import type { AbsoluteUnits, RelativeUnits } from "./units";

export interface IBreakpoints {
    [index: string]: `${number}${AbsoluteUnits | RelativeUnits}`;
}

/**
 * Default breakpoints
 */
const Breakpoints: IBreakpoints = {
    'xs': '0px',
    'extra-small': '0px',
    'sm': '600px',
    'small': '600px',
    'md': '900px',
    'medium': '900px',
    'lg': '1200px',
    'large': '1200px',
    'xl': '1536px',
    'extra-large': '1536px',
};

export default Breakpoints;
