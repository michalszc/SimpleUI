import * as CSS from "csstype";
import type { Config } from "./config";

export const layout: Config = {
    display: 'display',
    width: 'width',
    w: 'width',
    inlineSize: 'inlineSize',
    boxSize: 'boxSize',
    boxSizing: 'boxSizing',
    maxWidth: 'maxWidth',
    maxW: 'maxWidth',
    maxInlineSize: 'maxInlineSize',
    minWidth: 'minWidth',
    minW: 'minWidth',
    minInlineSize: 'minInlineSize',
    height: 'height',
    h: 'height',
    blockSize: 'blockSize',
    maxHeight: 'maxHeight',
    maxH: 'maxHeight',
    maxBlockSize: 'maxBlockSize',
    minHeight: 'minHeight',
    minH: 'minHeight',
    minBlockSize: 'minBlockSize',
    verticalAlign: 'verticalAlign',
    overflow: 'overflow',
    overflowX: 'overflowX',
    overflowY: 'overflowY',
    boxDecorationBreak: 'boxDecorationBreak',
    float: 'float',
    objectFit: 'objectFit',
    objectPosition: 'objectPosition',
    overscrollBehavior: 'overscrollBehavior',
    overscroll: 'overscrollBehavior',
    overscrollBehaviorX: 'overscrollBehaviorX',
    overscrollX: 'overscrollBehaviorX',
    overscrollBehaviorY: 'overscrollBehaviorY',
    overscrollY: 'overscrollBehaviorY',
    visibility: 'visibility',
    isolation: 'isolation'
};

export interface LayoutProps {
    /**
     * The CSS `display` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
     */
    display?: CSS.Property.Display;
    /**
     * The CSS `width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
     */
    width?: CSS.Property.Width;
    /**
     * The CSS `width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
     */
    w?: CSS.Property.Width;
    /**
     * The CSS `inline-size` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size)
     */
    inlineSize?: CSS.Property.InlineSize;
    /**
     * The CSS `box-sizing` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
     */
    boxSize?: CSS.Property.BoxSizing;
    /**
     * The CSS `box-sizing` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
     */
    boxSizing?: CSS.Property.BoxSizing
    /**
     * The CSS `max-width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
     */
    maxWidth?: CSS.Property.MaxWidth;
    /**
     * The CSS `max-width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
     */
    maxW?: CSS.Property.MaxWidth;
    /**
     * The CSS `max-inline-size` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
     */
    maxInlineSize?: CSS.Property.MaxInlineSize;
    /**
     * The CSS `min-width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
     */
    minWidth?: CSS.Property.MinWidth;
    /**
     * The CSS `min-width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
     */
    minW?: CSS.Property.MinWidth;
    /**
     * The CSS `min-inline-size` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size)
     */
    minInlineSize?: CSS.Property.MinInlineSize;
    /**
     * The CSS `height` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
     */
    height?: CSS.Property.Height;
    /**
     * The CSS `height` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance)
     */
    h?: CSS.Property.Height;
    /**
     * The CSS `block-size` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size)
     */
    blockSize?: CSS.Property.BlockSize;
    /**
     * The CSS `max-height` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
     */
    maxHeight?: CSS.Property.MaxHeight;
    /**
     * The CSS `max-height` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
     */
    maxH?: CSS.Property.MaxHeight;
    /**
     * The CSS `max-block-size` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size)
     */
    maxBlockSize?: CSS.Property.MaxBlockSize;
    /**
     * The CSS `min-height` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height)
     */
    minHeight?: CSS.Property.MinHeight;
    /**
     * The CSS `min-height` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height)
     */
    minH?: CSS.Property.MinHeight;
    /**
     * The CSS `min-block-size` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size)
     */
    minBlockSize?: CSS.Property.MinBlockSize;
    /**
     * The CSS `vertical-align` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)
     */
    verticalAlign?: CSS.Property.VerticalAlign
    /**
     * The CSS `overflow` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
     */
    overflow?: CSS.Property.Overflow;
    /**
     * The CSS `overflow-x` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x)
     */
    overflowX?: CSS.Property.OverflowX;
    /**
     * The CSS `overflow-y` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y)
     */
    overflowY?: CSS.Property.OverflowY;
    /**
     * The CSS `box-decoration-break` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break)
     */
    boxDecorationBreak?: CSS.Property.BoxDecorationBreak;
    /**
     * The CSS `float` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
     */
    float?: CSS.Property.Float;
    /**
     * The CSS `object-fit` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
     */
    objectFit?: CSS.Property.ObjectFit;
    /**
     * The CSS `object-position` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
     */
    objectPosition?: CSS.Property.ObjectPosition;
    /**
     * The CSS `overscroll-behavior` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior)
     */
    overscrollBehavior?: CSS.Property.OverscrollBehavior;
    /**
     * The CSS `overscroll-behavior` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior)
     */
    overscroll?: CSS.Property.OverscrollBehavior;
    /**
     * The CSS `overscroll-behavior-x` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-x)
     */
    overscrollBehaviorX?: CSS.Property.OverscrollBehaviorX;
    /**
     * The CSS `overscroll-behavior-x` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-x)
     */
    overscrollX?: CSS.Property.OverscrollBehaviorX;
    /**
     * The CSS `overscroll-behavior-y` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-y)
     */
    overscrollBehaviorY?: CSS.Property.OverscrollBehaviorY;
    /**
     * The CSS `overscroll-behavior-y` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-y)
     */
    overscrollY?: CSS.Property.OverscrollBehaviorY;
    /**
     * The CSS `visibility` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)
     */
    visibility?: CSS.Property.Visibility;
    /**
     * The CSS `isolation` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/isolation)
     */
    isolation?: CSS.Property.Isolation;
}
