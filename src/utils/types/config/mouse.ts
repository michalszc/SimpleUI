import { MouseEventHandler } from "react";

export interface MouseEventsProps {
    /**
     * 	A user clicks on an element
     */
    onClick?: MouseEventHandler<HTMLElement>;
    /**
     * The mouse pointer moves onto an element
     */
    onMouseOver?: MouseEventHandler<HTMLElement>;
    /**
     * The mouse pointer moves out of an element
     */
    onMouseOut?: MouseEventHandler<HTMLElement>;
    /**
     * The mouse pointer moves into an element
     */
    onMouseEnter?: MouseEventHandler<HTMLElement>;
    /**
     * The mouse pointer moves out of an element
     */
    onMouseLeave?: MouseEventHandler<HTMLElement>;
    /**
     * A mouse button is released over an element
     */
    onMouseUp?: MouseEventHandler<HTMLElement>;
    /**
     * A mouse button is pressed over an element
     */
    onMouseDown?: MouseEventHandler<HTMLElement>;
    /**
     * The mouse pointer moves over an element
     */
    onMouseMove?: MouseEventHandler<HTMLElement>;
}
