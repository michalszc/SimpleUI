import { mergeWith } from "lodash";
import {
    background,
    border,
    color,
    effect,
    flexbox,
    grid,
    interactivity,
    layout,
    list,
    position,
    space,
    textDecoration,
    transform,
    transition,
    typography,
    scroll,
} from "./config"; //eslint-disable-next-line no-duplicate-imports
import type { Config } from "./config"; 

export const StyleProperties: Config = mergeWith(
    {},
    background,
    border,
    color,
    effect,
    flexbox,
    grid,
    interactivity,
    layout,
    list,
    position,
    space,
    textDecoration,
    transform,
    transition,
    typography,
    scroll
);

export const isStyleProp = (prop: string) => prop in StyleProperties;
