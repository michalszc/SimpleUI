import * as CSS from "csstype";
import type { Config } from "./config";

export const transition: Config = {
    transition: 'transition',
    transitionProperty: 'transitionProperty',
    transitionTimingFunction: 'transitionTimingFunction',
    transitionDuration: 'transitionDuration',
    transitionDelay: 'transitionDelay',
    animation: 'animation',
    willChange: 'willChange'
};

export interface TransitionProps {
    /**
     * The CSS `transition` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
     */
    transition?: CSS.Property.Transition;
    /**
     * The CSS `transition-property` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)
     */
    transitionProperty?: CSS.Property.TransitionProperty;
    /**
     * The CSS `transition-timing-function` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
     */
    transitionTimingFunction?: CSS.Property.TransitionTimingFunction;
    /**
     * The CSS `transition-duration` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)
     */
    transitionDuration?: CSS.Property.TransitionDuration;
    /**
     * The CSS `transition-delay` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay)
     */
    transitionDelay?: CSS.Property.TransitionDelay;
    /**
     * The CSS `animation` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
     */
    animation?: CSS.Property.Animation;
    /**
     * The CSS `will-change` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)
     */
    willChange?: CSS.Property.WillChange;
}
