import * as CSS from "csstype";
import type { Config } from "./config";

export const textDecoration: Config = {
    textDecoration: 'textDecoration',
    textDecor: 'textDecoration',
    textDecorationColor: 'textDecorationColor',
    textDecorationThickness: 'textDecorationThickness',
    textDecorationStyle: 'textDecorationStyle',
    textDecorationLine: 'textDecorationLine',
    textUnderlineOffset: 'textUnderlineOffset',
    textShadow: 'textShadow'
};

export interface TextDecorationProps {
    /**
     * The CSS `text-decoration` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
     */
    textDecoration?: CSS.Property.TextDecoration;
    /**
     * The CSS `text-decoration` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
     */
    textDecor?: CSS.Property.TextDecoration;
    /**
     * The CSS `text-decoration-color` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color)
     */
    textDecorationColor?: CSS.Property.TextDecorationColor;
    /**
     * The CSS `text-decoration-thickness` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness)
     */
    textDecorationThickness?: CSS.Property.TextDecorationThickness;
    /**
     * The CSS `text-decoration-style` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style)
     */
    textDecorationStyle?: CSS.Property.TextDecorationStyle;
    /**
     * The CSS `text-decoration-line` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line)
     */
    textDecorationLine?: CSS.Property.TextDecorationLine;
    /**
     * The CSS `text-underline-offset` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset)
     */
    textUnderlineOffset?: CSS.Property.TextUnderlineOffset;
    /**
     * The `text-shadow` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
     */
    textShadow?: CSS.Property.TextShadow;
  }
