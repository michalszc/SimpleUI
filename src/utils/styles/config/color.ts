import * as CSS from "csstype";
import type { Config } from "./config";

export const color: Config = {
    color: 'color',
    textColor: 'color'
};

export interface ColorProps {
    /**
     * The CSS `color` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
     */
    color?: CSS.Property.Color;
    /**
     * The CSS `color` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
     */
    textColor?: CSS.Property.Color;
}
