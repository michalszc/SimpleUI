import type * as CSS from "csstype";
import { 
    blue, white, purple,
    red, orange, lightBlue,
    green
 } from ".";

export interface PaletteColor {
    light?: CSS.DataType.Color;
    main: CSS.DataType.Color;
    dark?: CSS.DataType.Color;
    contrast?: CSS.DataType.Color;
}

export interface IPalette {
    [index: string]: PaletteColor;
}

/**
 * Default color palette
 */
const Palette: IPalette = {
    primary: {
        light: blue[50],
        main: blue[200],
        dark: blue[400],
        contrast: white 
    },
    secondary: {
        light: purple[50],
        main: purple[200],
        dark: purple[400],
        contrast: white
    },
    error: {
        light: red[300],
        main: red[500],
        dark: red[700],
        contrast: white
    }, 
    warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[700],
        contrast: white
    }, 
    info: {
        light: lightBlue[300],
        main: lightBlue[400],
        dark: lightBlue[700],
        contrast: white
    }, 
    success: {
        light: green[300],
        main: green[400],
        dark: green[700],
        contrast: white
    }
};

export default Palette;
