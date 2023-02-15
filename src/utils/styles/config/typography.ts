import * as CSS from "csstype";
import type { Config } from "./config";

export const typography: Config = {
    fontWeight: 'fontWeight',
    lineHeight: 'lineHeight',
    letterSpacing: 'letterSpacing',
    fontSize: 'fontSize',
    fontFamily: 'fontFamily',
    textAlign: 'textAlign',
    fontStyle: 'fontStyle',
    textIndent: 'textIndent',
    wordBreak: 'wordBreak',
    overflowWrap: 'overflowWrap',
    textOverflow: 'textOverflow',
    textTransform: 'textTransform',
    whiteSpace: 'whiteSpace'
};

export interface TypographyProps {
    /**
     * The CSS `font-weight` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
     */
    fontWeight?: CSS.Property.FontWeight;
    /**
     * The CSS `line-height` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
     */
    lineHeight?: CSS.Property.LineHeight;
    /**
     * The CSS `letter-spacing` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
     */
    letterSpacing?: CSS.Property.LetterSpacing;
    /**
     * The CSS `font-size` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
     */
    fontSize?: CSS.Property.FontSize;
    /**
     * The CSS `font-family` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
     */
    fontFamily?: CSS.Property.FontFamily;
    /**
     * The CSS `text-align` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
     */
    textAlign?: CSS.Property.TextAlign;
    /**
     * The CSS `font-style` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
     */
    fontStyle?: CSS.Property.FontStyle;
    /**
     * The CSS `text-indent` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
     */
    textIndent?: CSS.Property.TextIndent;
    /**
     * The CSS `word-break` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
     */
    wordBreak?: CSS.Property.WordBreak;
    /**
     * The CSS `overflow-wrap` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap)
     */
    overflowWrap?: CSS.Property.OverflowWrap;
    /**
     * The CSS `text-overflow` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow)
     */
    textOverflow?: CSS.Property.TextOverflow;
    /**
     * The CSS `text-transform` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
     */
    textTransform?: CSS.Property.TextTransform;
    /**
     * The CSS `white-space` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
     */
    whiteSpace?: CSS.Property.WhiteSpace;
}
