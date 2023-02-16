import * as CSS from "csstype";
import type { Config } from "./config";

export const transform: Config = {
    transform: 'transform',
    transformOrigin: 'transformOrigin',
    clipPath: 'clipPath',
    translate: 'translate',
    rotate: 'rotate',
    scale: 'scale'
};

export interface TransformProps {
    /**
     * The CSS `transform` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
     */
    transform?: CSS.Property.Transform;
    /**
     * The CSS `transform-origin` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
     */
    transformOrigin?: CSS.Property.TransformOrigin;
    /**
     * The CSS `clip-path` property.
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)
     */
    clipPath?: CSS.Property.ClipPath;
    /**
     * The CSS `translate` property.
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/translate)
     */
    translate?: CSS.Property.Translate;
    /**
     * The CSS `rotate` property.
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/rotate)
     */
    rotate?: CSS.Property.Rotate;
    /**
     * The CSS `scale` property.
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scale)
     */
    scale?: CSS.Property.Scale;
}
