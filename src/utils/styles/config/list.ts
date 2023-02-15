import * as CSS from "csstype";
import type { Config } from "./config";

export const list: Config = {
    listStyle: 'listStyle',
    listStyleType: 'listStyleType',
    listStylePosition: 'listStylePosition',
    listStylePos: 'listStylePos',
    listStyleImage: 'listStyleImage',
    listStyleImg: 'listStyleImg'
};

export interface ListProps {
    /**
     * The CSS `list-style` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style)
     */
    listStyle?: CSS.Property.ListStyle;
    /**
     * The CSS `list-style-type` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)
     */
    listStyleType?: CSS.Property.ListStyleType;
    /**
     * The CSS `list-style-position` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position)
     */
    listStylePosition?: CSS.Property.ListStylePosition;
    /**
     * The CSS `list-style-position` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position)
     */
    listStylePos?: CSS.Property.ListStylePosition;
    /**
     * The CSS `list-style-image` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image)
     */
    listStyleImage?: CSS.Property.ListStyleImage;
    /**
     * The CSS `list-style-image` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image)
     */
    listStyleImg?: CSS.Property.ListStyleImage;
}
