import * as CSS from "csstype";
import type { Config } from "./config";

export const effect: Config = {
    shadow: 'boxShadow',
    boxShadow: 'boxShadow',
    blendMode: 'mixBlendMode',
    mixBlendMode: 'mixBlendMode',
    bgBlendMode: 'backgroundBlendMode',
    backgroundBlendMode: 'backgroundBlendMode',
    opacity: 'opacity',
    backdropFilter: 'backdropFilter',
    filter: 'filter'
};

export interface EffectProps {
    /**
     * The `box-shadow` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
     */
    shadow?: CSS.Property.BoxShadow | number;
    /**
     * The `box-shadow` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
     */
    boxShadow?: CSS.Property.BoxShadow | number;
    /**
     * The `mix-blend-mode` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode)
     */
    blendMode?: CSS.Property.MixBlendMode;
    /**
     * The `mix-blend-mode` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode)
     */
    mixBlendMode?: CSS.Property.MixBlendMode;
    /**
     * The CSS `background-blend-mode` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode)
     */
    bgBlendMode?: CSS.Property.BackgroundBlendMode;
    /**
     * The CSS `background-blend-mode` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode)
     */
    backgroundBlendMode?: CSS.Property.BackgroundBlendMode;
    /**
     * The CSS `opacity` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
     */
    opacity?: CSS.Property.Opacity;
    /**
    * The CSS `backdrop-filter` property
    * 
    * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
    */
    backdropFilter?: CSS.Property.BackdropFilter;
    /**
    * The CSS `filter` property
    * 
    * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
    */
    filter?: CSS.Property.Filter;
}
