import { MouseEventHandler, KeyboardEventHandler } from "react";

export interface EventsProps extends MouseEventsProps, KeyboardEventsProps {}

export interface MouseEventsProps {
    /**
     * 	A user clicks on an element
     * 
     * @see [W3C spec](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click)
     */
    onClick?: MouseEventHandler<HTMLElement>;
    /**
     * The mouse pointer moves onto an element
     * 
     * @see [W3C spec](https://www.w3.org/TR/uievents/#event-type-mouseover)
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

export interface KeyboardEventsProps {
    /**
     * 	A user presseed down a keyboard's key  
     */
    onKeyDown?: KeyboardEventHandler<HTMLElement>;
    /**
     * 	A user stoped pressing on a keyboard's key 
     */
    onKeyUp?: KeyboardEventHandler<HTMLElement>;
    /**
     * 	A user is pressing down and holding a keyboard's key  
     */
    onKeyPress?: KeyboardEventHandler<HTMLElement>; 
}
