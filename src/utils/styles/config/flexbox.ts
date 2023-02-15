import * as CSS from "csstype";
import type { Config } from "./config";

export const flexbox: Config = {
    alignItems: 'alignItems',
    alignContent: 'alignContent',
    justifyItems: 'justifyItems',
    justifyContent: 'justifyContent',
    flexWrap: 'flexWrap',
    flexFlow: 'flexFlow',
    flexBasis: 'flexBasis',
    flexDir: 'flexDirection',
    flexDirection: 'flexDirection',
    flex: 'flex',
    gap: 'gap',
    rowGap: 'rowGap',
    columnGap: 'columnGap',
    justifySelf: 'justifySelf',
    alignSelf: 'alignSelf',
    order: 'order',
    flexGrow: 'flexGrow',
    flexShrink: 'flexShrink',
    placeItems: 'placeItems',
    placeContent: 'placeContent',
    placeSelf: 'placeSelf'
};

export interface FlexboxProps {
    /**
     * The CSS `align-items` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/align-items)
     */
    alignItems?: CSS.Property.AlignItems;
    /**
     * The CSS `align-content` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/align-content)
     */
    alignContent?: CSS.Property.AlignContent;
    /**
     * The CSS `justify-items` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/justify-items)
     */
    justifyItems?: CSS.Property.JustifyItems;
    /**
     * The CSS `justify-content` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/justify-content)
     */
    justifyContent?: CSS.Property.JustifyContent;
    /**
     * The CSS `flex-wrap` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-wrap)
     */
    flexWrap?: CSS.Property.FlexWrap;
    /**
     * The CSS `flex-flow` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
     */
    flexFlow?: CSS.Property.FlexFlow;
    /**
     * The CSS `flex-basis` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-basis)
     */
    flexBasis?: CSS.Property.FlexBasis;
    /**
     * The CSS `flex-direction` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-direction)
     */
    flexDir?: CSS.Property.FlexDirection;
    flexDirection?: CSS.Property.FlexDirection;
    /**
     * The CSS `flex` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex)
     */
    flex?: CSS.Property.Flex;
    /**
     * The CSS `gap` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/gap)
     */
    gap?: CSS.Property.Gap;
    /**
     * The CSS `row-gap` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/row-gap)
     */
    rowGap?: CSS.Property.RowGap;
    /**
     * The CSS `column-gap` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/column-gap)
     */
    columnGap?: CSS.Property.ColumnGap;
    /**
     * The CSS `justify-self` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
     */
    justifySelf?: CSS.Property.JustifySelf;
    /**
     * The CSS `align-self` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/align-self)
     */
    alignSelf?: CSS.Property.AlignSelf;
    /**
     * The CSS `order` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/order)
     */
    order?: CSS.Property.Order;
    /**
     * The CSS `flex-grow` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-grow)
     */
    flexGrow?: CSS.Property.FlexGrow;
    /**
     * The CSS `flex-shrink` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/flex-shrink)
     */
    flexShrink?: CSS.Property.FlexShrink;
    /**
     * The CSS `place-items` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/place-items)
     */
    placeItems?: CSS.Property.PlaceItems;
    /**
     * The CSS `place-content` property
     * 
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/place-content)
     */
    placeContent?: CSS.Property.PlaceContent;
    /**
     * The CSS `place-self` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/docs/Web/CSS/place-self)
     */
    placeSelf?: CSS.Property.PlaceSelf;
}
