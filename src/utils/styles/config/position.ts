import * as CSS from "csstype";
import type { Config, Custom } from "./config";

export const position: Config = {
    zIndex: 'zIndex',
    top: 'top',
    insetBlockStart: 'insetBlockStart',
    right: 'right',
    insetInlineEnd: 'insetInlineEnd',
    bottom: 'bottom',
    insetBlockEnd: 'insetBlockEnd',
    left: 'left',
    insetInlineStart: 'insetInlineStart',
    inset: 'inset',
    pos: 'position',
    position: 'position',
    insetInline: 'insetInline',
    insetBlock: 'insetBlock'
};

export interface PositionProps {
    /**
     * The CSS `z-index` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
     */
    zIndex?: Custom<CSS.Property.ZIndex>;
    /**
     * The CSS `top` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
     */
    top?: Custom<CSS.Property.Top>;
    /**
     * The CSS `inset-block-start` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-start)
     */
    insetBlockStart?: CSS.Property.InsetBlockStart;
    /**
     * The CSS `right` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/right)
     */
    right?: Custom<CSS.Property.Right>;
    /**
     * The CSS `inset-inline-end` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-end)
     */
    insetInlineEnd?: CSS.Property.InsetInlineEnd;
    /**
     * The CSS `bottom` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom)
     */
    bottom?: Custom<CSS.Property.Bottom>;
    /**
     * The CSS `inset-block-end` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-end)
     */
    insetBlockEnd?: CSS.Property.InsetBlockEnd;
    /**
     * The CSS `left` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/left)
     */
    left?: Custom<CSS.Property.Left>;
    /**
     * The CSS `inset-inline-start` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start)
     */
    insetInlineStart?: CSS.Property.InsetInlineStart;
    /**
     * The CSS `inset` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/inset)
     */
    inset?: CSS.Property.Inset;
    /**
     * The CSS `position` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
     */
    pos?: CSS.Property.Position;
    /**
     * The CSS `position` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
     */
    position?: CSS.Property.Position;
    /**
     * The CSS `inset-inline` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline)
     */
    insetInline?: CSS.Property.InsetInline;
    /**
     * The CSS `inset-block` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block)
     */
    insetBlock?: CSS.Property.InsetBlock;
}
