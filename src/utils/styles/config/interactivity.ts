import * as CSS from "csstype";
import type { Config } from "./config";

export const interactivity: Config = {
    appearance: 'appearance',
    userSelect: 'userSelect',
    pointerEvents: 'pointerEvents',
    resize: 'resize',
    cursor: 'cursor',
    outline: 'outline',
    outlineOffset: 'outlineOffset',
    outlineColor: 'outlineColor',
    outlineStyle: 'outlineStyle',
    outlineWidth: 'outlineWidth'
}; 

export interface InteractivityProps {
    /**
     * The CSS `appearance` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance)
     */
    appearance?: CSS.Property.Appearance;
    /**
     * The CSS `user-select` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)
     */
    userSelect?: CSS.Property.UserSelect;
    /**
     * The CSS `pointer-events` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
     */
    pointerEvents?: CSS.Property.PointerEvents;
    /**
     * The CSS `resize` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/resize)
     */
    resize?: CSS.Property.Resize;
    /**
     * The CSS `cursor` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
     */
    cursor?: CSS.Property.Cursor;
    /**
     * The CSS `outline` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/outline)
     */
    outline?: CSS.Property.Outline;
    /**
     * The CSS `outline-offset` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset)
     */
    outlineOffset?: CSS.Property.OutlineOffset;
    /**
     * The CSS `outline-color` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color)
     */
    outlineColor?: CSS.Property.OutlineColor;
    /**
     * The CSS `outline-style` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-style)
     */
    outlineStyle?: CSS.Property.OutlineStyle;
    /**
     * The CSS `outline-width` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width)
     */
    outlineWidth?: CSS.Property.OutlineStyle;
}
