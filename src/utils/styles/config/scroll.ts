import * as CSS from "csstype";
import type { Config } from "./config";

export const scroll: Config = {
    scrollBehavior: 'scrollBehavior',
    scrollSnapAlign: 'scrollSnapAlign',
    scrollSnapStop: 'scrollSnapStop',
    scrollSnapType: 'scrollSnapType',
    scrollMargin: 'scrollMargin',
    scrollMarginTop: 'scrollMarginTop',
    scrollMarginBottom: 'scrollMarginBottom',
    scrollMarginLeft: 'scrollMarginLeft',
    scrollMarginRight: 'scrollMarginRight',
    scrollPadding: 'scrollPadding',
    scrollPaddingTop: 'scrollPaddingTop',
    scrollPaddingBottom: 'scrollPaddingBottom',
    scrollPaddingLeft: 'scrollPaddingLeft',
    scrollPaddingRight: 'scrollPaddingRight'
};

export interface ScrollProps {
    /**
     * The CSS `scroll-behavior` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)
     */
    scrollBehavior?: CSS.Property.ScrollBehavior;
    /**
     * The CSS `scroll-snap-align` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align)
     */
    scrollSnapAlign?: CSS.Property.ScrollSnapAlign;
    /**
     * The CSS `scroll-snap-stop` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop)
     */
    scrollSnapStop?: CSS.Property.ScrollSnapStop;
    /**
     * The CSS `scroll-snap-type` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)
     */
    scrollSnapType?: CSS.Property.ScrollSnapType;
    /**
     * The CSS `scroll-margin` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin)
     */
    scrollMargin?: CSS.Property.ScrollMargin;
    /**
     * The CSS `scroll-margin-top` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top)
     */
    scrollMarginTop?: CSS.Property.ScrollMarginTop;
    /**
     * The CSS `scroll-margin-bottom` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-bottom)
     */
    scrollMarginBottom?: CSS.Property.ScrollMarginBottom;
    /**
     * The CSS `scroll-margin-left` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-left)
     */
    scrollMarginLeft?: CSS.Property.ScrollMarginLeft;
    /**
     * The CSS `scroll-margin-right` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-right)
     */
    scrollMarginRight?: CSS.Property.ScrollMarginRight;
    /**
     * The CSS `scroll-padding` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding)
     */
    scrollPadding?: CSS.Property.ScrollPadding;
    /**
     * The CSS `scroll-padding-top` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-top)
     */
    scrollPaddingTop?: CSS.Property.ScrollPaddingTop;
    /**
     * The CSS `scroll-padding-bottom` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-bottom)
     */
    scrollPaddingBottom?: CSS.Property.ScrollPaddingBottom;
    /**
     * The CSS `scroll-padding-left` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-left)
     */
    scrollPaddingLeft?: CSS.Property.ScrollPaddingLeft;
    /**
     * The CSS `scroll-padding-right` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-right)
     */
    scrollPaddingRight?: CSS.Property.ScrollPaddingRight;
}
