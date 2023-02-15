import * as CSS from "csstype";
import type { Config } from "./config";

export const grid: Config = {
    gridGap: 'gridGap',
    gridColumnGap: 'gridColumnGap',
    gridRowGap: 'gridRowGap',
    gridColumnStart: 'gridColumnStart',
    gridRowStart: 'gridRowStart',
    gridRowEnd: 'gridRowEnd',
    gridTemplate: 'gridTemplate',
    gridColumnEnd: 'gridColumnEnd',
    gridColumn: 'gridColumn',
    gridRow: 'gridRow',
    gridAutoFlow: 'gridAutoFlow',
    gridAutoColumns: 'gridAutoColumns',
    gridAutoRows: 'gridAutoRows',
    gridTemplateColumns: 'gridTemplateColumns',
    gridTemplateRows: 'gridTemplateRows',
    gridTemplateAreas: 'gridTemplateAreas',
    gridArea: 'gridArea'
};

export interface GridProps {
    /**
     * The CSS `grid-gap` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap)
     */
    gridGap?: CSS.Property.GridGap;
    /**
     * The CSS `grid-column-gap` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
     */
    gridColumnGap?: CSS.Property.GridColumnGap;
    /**
     * The CSS `grid-row-gap` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)
     */
    gridRowGap?: CSS.Property.GridRowGap;
    /**
     * The CSS `grid-column` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start)
     */
    gridColumnStart?: CSS.Property.GridColumnStart;
    /**
     * The CSS `grid-row-start` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start)
     */
    gridRowStart?: CSS.Property.GridRowStart;
    /**
     * The CSS `grid-row-end` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end)
     */
    gridRowEnd?: CSS.Property.GridRowEnd;
    /**
     * The CSS `grid-template` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template)
     */
    gridTemplate?: CSS.Property.GridTemplate;
    /**
     * The CSS `grid-column` property
     *
     * I@see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end)
     */
    gridColumnEnd?: CSS.Property.GridColumnEnd;
    /**
     * The CSS `grid-column` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)
     */
    gridColumn?: CSS.Property.GridColumn;
    /**
     * The CSS `grid-row` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
     */
    gridRow?: CSS.Property.GridRow;
    /**
     * The CSS `grid-auto-flow` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
     */
    gridAutoFlow?: CSS.Property.GridAutoFlow;
    /**
     * The CSS `grid-auto-columns` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
     */
    gridAutoColumns?: CSS.Property.GridAutoColumns;
    /**
     * The CSS `grid-auto-rows` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
     */
    gridAutoRows?: CSS.Property.GridAutoRows;
    /**
     * The CSS `grid-template-columns` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
     */
    gridTemplateColumns?: CSS.Property.GridTemplateColumns;
    /**
     * The CSS `grid-template-rows` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)
     */
    gridTemplateRows?: CSS.Property.GridTemplateRows;
    /**
     * The CSS `grid-template-areas` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
     */
    gridTemplateAreas?: CSS.Property.GridTemplateAreas;
    /**
     * The CSS `grid-areas` property
     *
     * @see [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)
     */
    gridArea?: CSS.Property.GridArea;
  }
