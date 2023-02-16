import * as CSS from "csstype";
import type { Config } from "./config";

export const background: Config = {
    bg: 'background',
    background: 'background',
    bgClip: 'backgroundClip',
    backgroundClip: 'backgroundClip',
    bgColor: 'backgroundColor',
    backgroundColor: 'backgroundColor',
    bgImg: 'backgroundImage',
    bgImage: 'backgroundImage',
    backgroundImage: 'backgroundImage',
    bgSize: 'backgroundSize',
    backgroundSize: 'backgroundSize',
    bgRepeat: 'backgroundRepeat',
    backgroundRepeat: 'backgroundRepeat',
    bgAttachment: 'backgroundAttachment',
    backgroundAttachment: 'backgroundAttachment',
    bgPos: 'backgroundPosition',
    bgPosition: 'backgroundPosition',
    backgroundPosition: 'backgroundPosition'
};

export interface BackgroundProps {
    /**
     * The CSS `background` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
     */
    bg?: CSS.Property.Color;
    /**
     * The CSS `background` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
     */
    background?: CSS.Property.Background;
    /**
     * The CSS `background-clip` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)
     */
    bgClip?: CSS.Property.BackgroundClip;
    /**
     * The CSS `background-clip` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)
     */
    backgroundClip?: CSS.Property.BackgroundClip;
    /**
     * The CSS `background-color` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
     */
    bgColor?: CSS.Property.Color;
    /**
     * The CSS `background-color` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
     */
    backgroundColor?: CSS.Property.Color;
    /**
     * The CSS `background-image` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
     */
    bgImg?: CSS.Property.BackgroundImage;
    /**
     * The CSS `background-image` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
     */
    bgImage?: CSS.Property.BackgroundImage;
    /**
     * The CSS `background-image` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
     */
    backgroundImage?: CSS.Property.BackgroundImage;
    /**
     * The CSS `background-size` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
     */
    bgSize?: CSS.Property.BackgroundSize | number;
    /**
     * The CSS `background-size` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
     */
    backgroundSize?: CSS.Property.BackgroundSize | number;
    /**
     * The CSS `background-position` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
    */
    bgPos?: CSS.Property.BackgroundPosition | number;
    /**
     * The CSS `background-position` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
    */
    bgPosition?: CSS.Property.BackgroundPosition | number;
    /**
     * The CSS `background-position` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
    */
    backgroundPosition?: CSS.Property.BackgroundPosition | number;
    /**
     * The CSS `background-repeat` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
     */
    bgRepeat?: CSS.Property.BackgroundRepeat;
    /**
     * The CSS `background-repeat` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
     */
    backgroundRepeat?: CSS.Property.BackgroundRepeat;
    /**
     * The CSS `background-attachment` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)
     */
    bgAttachment?: CSS.Property.BackgroundAttachment;
    /**
     * The CSS `background-attachment` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)
     */
    backgroundAttachment?: CSS.Property.BackgroundAttachment;
}
