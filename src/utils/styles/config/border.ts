import * as CSS from "csstype";
import type { Config } from "./config";

export const border: Config = {
    border: 'border',
    borderWidth: 'borderWidth',
    borderStyle: 'borderStyle',
    borderColor: 'borderColor',
    borderRadius: 'borderRadius',
    rounded: 'borderRadius',
    borderTop:'borderTop', 
    borderBlockStart:'borderBlockStart', 
    borderTopWidth:'borderTopWidth', 
    borderBlockStartWidth:'borderBlockStartWidth', 
    borderBottomWidth:'borderBottomWidth', 
    borderBlockEndWidth:'borderBlockEndWidth', 
    borderLeftWidth: 'borderLeftWidth',
    borderStartWidth: 'borderLeftWidth',
    borderInlineStartWidth: 'borderInlineStartWidth',
    borderRightWidth: 'borderRightWidth',
    borderEndWidth: 'borderRightWidth',
    borderInlineEndWidth: 'borderInlineEndWidth',
    borderTopStyle: 'borderTopStyle',
    borderBlockStartStyle: 'borderBlockStartStyle',
    borderBottomStyle: 'borderBottomStyle',
    borderBlockEndStyle: 'borderBlockEndStyle',
    borderLeftStyle: 'borderLeftStyle',
    borderStartStyle: 'borderLeftStyle',
    borderInlineStartStyle: 'borderInlineStartStyle',
    borderRightStyle: 'borderRightStyle',
    borderEndStyle: 'borderRightStyle',
    borderInlineEndStyle: 'borderInlineEndStyle',
    borderTopColor: 'borderTopColor',
    borderBlockStartColor: 'borderBlockStartColor',
    borderBottomColor: 'borderBottomColor',
    borderBlockEndColor: 'borderBlockEndColor',
    borderLeftColor: 'borderLeftColor',
    borderStartColor: 'borderLeftColor',
    borderInlineStartColor: 'borderInlineStartColor',
    borderRightColor: 'borderRightColor',
    borderEndColor: 'borderRightColor',
    borderInlineEndColor: 'borderInlineEndColor',
    borderRight: 'borderRight',
    borderInlineEnd: 'borderInlineEnd',
    borderBottom: 'borderBottom',
    borderBlockEnd: 'borderBlockEnd',
    borderLeft: 'borderLeft',
    borderStart: 'borderStart',
    borderInlineStart: 'borderInlineStart',
    roundedTopLeft: 'borderTopLeftRadius',
    roundedTopStart: 'borderTopLeftRadius',
    borderTopLeftRadius: 'borderTopLeftRadius',
    borderTopStartRadius: 'borderTopLeftRadius',
    roundedTopEnd: 'borderTopRightRadius',
    roundedTopRight: 'borderTopRightRadius',
    borderTopRightRadius: 'borderTopRightRadius',
    borderTopEndRadius: 'borderTopRightRadius',
    roundedBottomLeft: 'borderBottomLeftRadius',
    roundedBottomStart: 'borderBottomLeftRadius',
    borderBottomLeftRadius: 'borderBottomLeftRadius',
    borderBottomStartRadius: 'borderBottomLeftRadius',
    borderBottomRightRadius: 'borderBottomRightRadius',
    borderBottomEndRadius: 'borderBottomRightRadius',
    roundedBottomRight: 'borderBottomRightRadius',
    roundedBottomEnd: 'borderBottomRightRadius'
};

export interface BorderProps {
    /**
     * The CSS `border` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
     */
    border?: CSS.Property.Border;
    /**
     * The CSS `border-width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)
     */
    borderWidth?: CSS.Property.BorderWidth;
    /**
     * The CSS `border-style` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
     */
    borderStyle?: CSS.Property.BorderStyle;
    /**
     * The CSS `border-color` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
     */
    borderColor?: CSS.Property.BorderTopColor;
    /**
     * The CSS `border-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
     */
    borderRadius?: CSS.Property.BorderRadius;
    /**
     * The CSS `border-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
     */
    rounded?: CSS.Property.BorderRadius;
    /**
     * The CSS `border-top` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top)
     */
    borderTop?: CSS.Property.BorderTop;
    /**
     * The CSS `border-block-start` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start)
     */
    borderBlockStart?: CSS.Property.BorderBlockStart;
    /**
     * The CSS `border-top-width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width)
     */
    borderTopWidth?: CSS.Property.BorderTopWidth;
    /**
     * The CSS `border-block-start-width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-width)
     */
    borderBlockStartWidth?: CSS.Property.BorderBlockStartWidth;
    /**
     * The CSS `border-bottom-width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width)
     */
    borderBottomWidth?: CSS.Property.BorderBottomWidth;
    /**
     * The CSS `border-block-end-width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-width)
     */
    borderBlockEndWidth?: CSS.Property.BorderBlockEndWidth;
    /**
     * The CSS `border-left-width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width)
     */
    borderLeftWidth?: CSS.Property.BorderLeftWidth;
    /**
     * The CSS `border-left-width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width)
     */
    borderStartWidth?: CSS.Property.BorderLeftWidth;
    /**
     * The CSS `border-inline-start-width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-width)
     */
    borderInlineStartWidth?: CSS.Property.BorderInlineStartWidth;
    /**
     * The CSS `border-right-width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width)
     */
    borderRightWidth?: CSS.Property.BorderRightWidth;
    /**
     * The CSS `border-right-width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width)
     */
    borderEndWidth?: CSS.Property.BorderRightWidth;
    /**
     * The CSS `border-inline-end-width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-width)
     */
    borderInlineEndWidth?: CSS.Property.BorderInlineEndWidth;
    /**
     * The CSS `border-top-style` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style)
     */
    borderTopStyle?: CSS.Property.BorderTopStyle;
    /**
     * The CSS `border-block-start-style` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-style)
     */
    borderBlockStartStyle?: CSS.Property.BorderBlockStartStyle;
    /**
     * The CSS `border-bottom-style` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style)
     */
    borderBottomStyle?: CSS.Property.BorderBottomStyle;
    /**
     * The CSS `border-block-end-style` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-style)
     */
    borderBlockEndStyle?: CSS.Property.BorderBlockEndStyle;
    /**
     * The CSS `border-left-style` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style)
     */
    borderLeftStyle?: CSS.Property.BorderLeftStyle;
    /**
     * The CSS `border-left-style` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style)
     */
    borderStartStyle?: CSS.Property.BorderLeftStyle;
    /**
     * The CSS `border-inline-start-style` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-style)
     */
    borderInlineStartStyle?: CSS.Property.BorderInlineStartStyle;
    /**
     * The CSS `border-right-styles` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style)
     */
    borderRightStyle?: CSS.Property.BorderRightStyle;
    /**
     * The CSS `border-right-styles` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style)
     */
    borderEndStyle?: CSS.Property.BorderRightStyle;
    /**
     * The CSS `border-inline-end-style` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-style)
     */
    borderInlineEndStyle?: CSS.Property.BorderInlineEndStyle;
    /**
     * The CSS `border-top-color` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color)
     */
    borderTopColor?: CSS.Property.BorderTopColor;
    /**
     * The CSS `border-block-start-color` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-color)
     */  
    borderBlockStartColor?: CSS.Property.BorderBlockStartColor;
    /**
     * The CSS `border-bottom-color` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color)
     */
    borderBottomColor?: CSS.Property.BorderBottomColor;
    /**
     * The CSS `border-block-end-color` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-color)
     */  
    borderBlockEndColor?: CSS.Property.BorderBlockEndColor;
    /**
     * The CSS `border-left-color` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color)
     */
    borderLeftColor?: CSS.Property.BorderLeftColor;
    /**
     * The CSS `border-left-color` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color)
     */
    borderStartColor?: CSS.Property.BorderLeftColor;
    /**
     * The CSS `border-inline-start-color` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-color)
     */  
    borderInlineStartColor?: CSS.Property.BorderInlineStartColor;
    /**
     * The CSS `border-right-color` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color)
     */
    borderRightColor?: CSS.Property.BorderRightColor;
    /**
     * The CSS `border-right-color` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color)
     */
    borderEndColor?: CSS.Property.BorderRightColor;
    /**
     * The CSS `border-inline-end-color` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-color)
     */
    borderInlineEndColor?: CSS.Property.BorderInlineEndColor;
    /**
     * The CSS `border-right` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right)
     */
    borderRight?: CSS.Property.BorderRight;
    /**
     * The CSS `border-inline-end` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end)
     */
    borderInlineEnd?: CSS.Property.BorderInlineEnd;
    /**
     * The CSS `border-bottom` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom)
     */
    borderBottom?: CSS.Property.BorderBottom;
    /**
     * The CSS `border-block-end` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end)
     */
    borderBlockEnd?: CSS.Property.BorderBlockEnd;
    /**
     * The CSS `border-left` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left)
     */
    borderLeft?: CSS.Property.BorderLeft;
    /**
     * The CSS `border-left` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left)
     */
    borderStart?: CSS.Property.BorderLeft;
    /**
     * The CSS `border-inline-start` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start)
     */
    borderInlineStart?: CSS.Property.BorderInlineStart;
    /**
     * The CSS `border-top-left-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)
     */
    roundedTopLeft?: CSS.Property.BorderTopLeftRadius;
    /**
     * The CSS `border-top-left-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)
     */
    roundedTopStart?: CSS.Property.BorderTopLeftRadius;
    /**
     * The CSS `border-top-left-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)
     */
    borderTopLeftRadius?: CSS.Property.BorderTopLeftRadius;
    /**
     * The CSS `border-top-left-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)
     */
    borderTopStartRadius?: CSS.Property.BorderTopLeftRadius;
    /**
     * The CSS `border-top-right-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)
    */
    roundedTopEnd?: CSS.Property.BorderTopRightRadius;
    /**
     * The CSS `border-top-right-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)
    */
    roundedTopRight?: CSS.Property.BorderTopRightRadius;
    /**
     * The CSS `border-top-right-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)
    */
    borderTopRightRadius?: CSS.Property.BorderTopRightRadius;
    /**
     * The CSS `border-top-right-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)
    */
    borderTopEndRadius?: CSS.Property.BorderTopRightRadius;
    /**
     * The CSS `border-bottom-left-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius)
     */
    roundedBottomLeft?: CSS.Property.BorderBottomLeftRadius;
    /**
     * The CSS `border-bottom-left-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius)
     */
    roundedBottomStart?: CSS.Property.BorderBottomLeftRadius;
    /**
     * The CSS `border-bottom-left-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius)
     */
    borderBottomLeftRadius?: CSS.Property.BorderBottomLeftRadius;
    /**
     * The CSS `border-bottom-left-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius)
     */
    borderBottomStartRadius?: CSS.Property.BorderBottomLeftRadius;
    /**
     * The CSS `border-bottom-right-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)
     */
    borderBottomRightRadius?: CSS.Property.BorderBottomRightRadius;
    /**
     * The CSS `border-bottom-right-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)
     */
    borderBottomEndRadius?: CSS.Property.BorderBottomRightRadius;
    /**
     * The CSS `border-bottom-right-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)
     */
    roundedBottomRight?: CSS.Property.BorderBottomRightRadius;
    /**
     * The CSS `border-bottom-right-radius` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)
     */
    roundedBottomEnd?: CSS.Property.BorderBottomRightRadius;
}
