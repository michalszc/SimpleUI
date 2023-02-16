import type { Config } from "./config";
import { isStyleProp, StyleProperties } from "./style";

export default function (props: Config): Config {
    const style: Config = {};

    for (const prop in props) {
        if (isStyleProp(prop)) {
            style[StyleProperties[prop]] = props[prop];
        }
    }

    if ('style' in props) {
        Object.assign(style, props['style']);
    }

    return style;
}
