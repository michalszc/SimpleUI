import * as CSS from "csstype";
import type { Config, Custom } from "./config";

export const space: Config = {
    m: 'margin',
    margin: 'margin',
    mt: 'marginTop',
    marginTop: 'marginTop',
    marginBlockStart: ' marginBlockStart',
    mr: 'marginRight',
    marginRight: 'marginRight',
    marginInlineEnd: 'marginInlineEnd',
    marginEnd: 'marginInlineEnd',
    me: 'marginInlineEnd',
    marginBlockEnd: 'marginBlockEnd',
    mb: 'marginBottom',
    marginBottom: 'marginBottom',
    ml: 'marginLeft',
    marginLeft: 'marginLeft',
    marginInlineStart: 'marginInlineStart',
    marginStart: 'marginInlineStart',
    ms: 'marginInlineStart',
    marginInline: 'marginInline',
    marginBlock: 'marginBlock',
    p: 'padding',
    padding: 'padding',
    pt: 'paddingTop',
    paddingTop: 'paddingTop',
    paddingBlockStart: 'paddingBlockStart',
    pr: 'paddingRight',
    paddingRight: 'paddingRight',
    paddingInlineEnd: 'paddingInlineEnd',
    paddingEnd: 'paddingInlineEnd',
    pe: 'paddingInlineEnd',
    pb: 'paddingBottom',
    paddingBottom: 'paddingBottom',
    paddingBlockEnd: 'paddingBlockEnd',
    pl: 'paddingLeft',
    paddingLeft: 'paddingLeft',
    paddingInlineStart: 'paddingInlineStart',
    paddingStart: 'paddingInlineStart',
    ps: 'paddingInlineStart',
    paddingInline: 'paddingInline',
    paddingBlock: 'paddingBlock'
};

export interface SpaceProps {
    /**
     * The CSS `margin` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
     */
    m?: CSS.Property.Margin;
    /**
     * The CSS `margin` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
     */
    margin?: CSS.Property.Margin;
    /**
     * The CSS `margin-top` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top)
     */
    mt?: CSS.Property.MarginTop;
    /**
     * The CSS `margin-top` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top)
    */
    marginTop?: CSS.Property.MarginTop;
   /**
     * The CSS `margin-block-start` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-start)
     */
    marginBlockStart?: CSS.Property.MarginBlockStart;
    /**
     * The CSS `margin-right` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right)
     */
    mr?: CSS.Property.MarginRight;
    /**
     * The CSS `margin-right` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right)
     */
    marginRight?: CSS.Property.MarginRight;
    /**
     * The CSS `margin-inline-end` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end)
     */
    marginInlineEnd?: CSS.Property.MarginInlineEnd;
    /**
     * The CSS `margin-inline-end` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end)
     */
    marginEnd?: CSS.Property.MarginInlineEnd;
    /**
     * The CSS `margin-inline-end` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end)
     */
    me?: CSS.Property.MarginInlineEnd;
    /**
     * The CSS `margin-block-end` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-end)
     */
    marginBlockEnd?: CSS.Property.MarginBlockEnd;
    /**
     * The CSS `margin-bottom` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom)
     */
    mb?: CSS.Property.MarginBottom;
    /**
     * The CSS `margin-bottom` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom)
     */
    marginBottom?: CSS.Property.MarginBottom;
    /**
     * The CSS `margin-left` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left)
     */
    ml?: CSS.Property.MarginLeft;
    /** 
     * The CSS `margin-left` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left)
     */
    marginLeft?: CSS.Property.MarginLeft;
    /**
     * The CSS `margin-inline-start` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start)
     */
    marginInlineStart?: CSS.Property.MarginInlineStart;
    /**
     * The CSS `margin-inline-start` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start)
     */
    marginStart?: CSS.Property.MarginInlineStart;
    /**
     * The CSS `margin-inline-start` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start)
     */
    ms?: CSS.Property.MarginInlineStart;
    /**
     * The CSS `margin-inline` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline)
     */
    marginInline?: CSS.Property.MarginInline;
    /**
     * The CSS `margin-block` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block)
     */
    marginBlock?: CSS.Property.MarginBlock;
    /**
     * The CSS `padding` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
     */
    p?: Custom<CSS.Property.Padding>;
    /**
     * The CSS `padding` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
     */
    padding?: Custom<CSS.Property.Padding>;
    /**
     * The CSS `padding-top` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top)
     */
    pt?: Custom<CSS.Property.PaddingTop>;
    /**
     * The CSS `padding-top` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top)
     */
    paddingTop?: Custom<CSS.Property.PaddingTop>;
    /**
     * The CSS `padding-block-start` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-start)
     */ 
    paddingBlockStart?: CSS.Property.PaddingBlockStart;
    /**
     * The CSS `padding-right` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right)
     */
    pr?: Custom<CSS.Property.PaddingRight>;
    /**
     * The CSS `padding-right` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right)
     */
    paddingRight?: Custom<CSS.Property.PaddingRight>;
    /**
     * The CSS `padding-inline-end` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end)
     */
    paddingInlineEnd?: CSS.Property.PaddingInlineEnd;
    /**
     * The CSS `padding-inline-end` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end)
     */
    paddingEnd?: CSS.Property.PaddingInlineEnd;
    /**
     * The CSS `padding-inline-end` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end)
     */
    pe?: CSS.Property.PaddingInlineEnd;
    /**
     * The CSS `padding-bottom` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom)
     */
    pb?: Custom<CSS.Property.PaddingBottom>;
    /**
     * The CSS `padding-bottom` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom)
     */
    paddingBottom?: Custom<CSS.Property.PaddingBottom>;
    /**
     * The CSS `padding-block-end` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-end)
     */
    paddingBlockEnd?: CSS.Property.PaddingBlockEnd;
    /**
     * The CSS `padding-left` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left)
     */
    pl?: Custom<CSS.Property.PaddingLeft>;
    /**
     * The CSS `padding-left` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left)
     */
    paddingLeft?: Custom<CSS.Property.PaddingLeft>;
    /**
     * The CSS `padding-inline-start` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start)
     */
    paddingInlineStart?: CSS.Property.PaddingInlineStart;
    /**
     * The CSS `padding-inline-start` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start)
     */
    paddingStart?: CSS.Property.PaddingInlineStart;
    /**
     * The CSS `padding-inline-start` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start)
     */
    ps?: CSS.Property.PaddingInlineStart;
    /**
     * The CSS `padding-inline` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline)
     */
    paddingInline?: CSS.Property.PaddingInline;
    /**
     * The CSS `padding-block` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block)
     */
    paddingBlock?: CSS.Property.PaddingBlock;
}
