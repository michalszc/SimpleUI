import { get } from "lodash";
import { Theme } from "../theme";
import type { Config } from "./config";
import { isStyleProp, StyleProperties } from "./style";

/**
 * Converts value described in configuration to css value
 * @param property 
 * @param value 
 * @returns 
 */
export function valueConverter(property: string, value: string, theme: Theme): string {
    switch (property) {
        // Colors
        case 'color':
        case 'borderColor':
        case 'backgroundColor':
            return get(theme, `colors.${value}`, 
                get(theme, `palette.${value}`,value) as string);
        // Sizes
        case 'padding':
        case 'paddingTop':
        case 'paddingRight':
        case 'paddingLeft':
        case 'paddingBottom':
        case 'margin':
        case 'marginTop':
        case 'marginRight':
        case 'marginLeft':
        case 'marginBottom':
        case 'top':
        case 'left':
        case 'right':
        case 'bottom':
        case 'width':
        case 'height':
        case 'maxWidth':
        case 'minWidth':
        case 'maxHeight':
        case 'minHeight':
            return get(theme, `sizes.${value}`, value);
        // Zindices
        case 'zIndex':
            return get(theme, `zindices.${value}`, value);
        default:
            return value;
    }
}

/**
 * Converts css props into style prop
 * @param props 
 * @param theme 
 * @returns 
 */
export default function getCss(props: Config, theme: Theme): Config {
    const style: Config = {};

    for (const prop in props) {
        if (isStyleProp(prop)) {
            style[StyleProperties[prop]] = valueConverter(StyleProperties[prop], props[prop], theme);
        }
    }

    if ('style' in props) {
        Object.assign(style, props['style']);
    }

    return style;
}
