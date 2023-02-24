import { MouseEventHandler, KeyboardEventHandler } from "react";

export interface EventsProps extends MouseEventsProps, KeyboardEventsProps {}

export interface MouseEventsProps {
    /**
     * 	A user clicks on an element
     * 
     * @see[W3C spec](https://www.w3.org/TR/uievents/#event-type-click)
     * @see[ReactJS docs](https://reactjs.org/docs/events.html#mouse-events)
     */
    onClick?: MouseEventHandler<HTMLElement>;
    /**
     * The mouse pointer moves onto an element
     * 
     * @see[W3C spec](https://www.w3.org/TR/uievents/#event-type-mouseover)
     * @see[ReactJS docs](https://reactjs.org/docs/events.html#mouse-events)
    */
    onMouseOver?: MouseEventHandler<HTMLElement>;
    /**
     * The mouse pointer moves out of an element
     * 
     * @see[W3C spec](https://www.w3.org/TR/uievents/#event-type-mouseout)
     * @see[ReactJS docs](https://reactjs.org/docs/events.html#mouse-events)
     */
    onMouseOut?: MouseEventHandler<HTMLElement>;
    /**
     * The mouse pointer moves into an element
     * 
     * @see[W3C spec](https://www.w3.org/TR/uievents/#event-type-mouseenter)
     * @see[ReactJS docs](https://reactjs.org/docs/events.html#mouse-events)
     */
    onMouseEnter?: MouseEventHandler<HTMLElement>;
    /**
     * The mouse pointer moves out of an element
     * 
     * @see[W3C spec](https://www.w3.org/TR/uievents/#event-type-mouseleave)
     * @see[ReactJS docs](https://reactjs.org/docs/events.html#mouse-events)
     */
    onMouseLeave?: MouseEventHandler<HTMLElement>;
    /**
     * A mouse button is released over an element
     * 
     * @see[W3C spec](https://www.w3.org/TR/uievents/#event-type-mouseup)
     * @see[ReactJS docs](https://reactjs.org/docs/events.html#mouse-events)
     */
    onMouseUp?: MouseEventHandler<HTMLElement>;
    /**
     * A mouse button is pressed over an element
     * 
     * @see[W3C spec](https://www.w3.org/TR/uievents/#event-type-mousedown)
     * @see[ReactJS docs](https://reactjs.org/docs/events.html#mouse-events)
     */
    onMouseDown?: MouseEventHandler<HTMLElement>;
    /**
     * The mouse pointer moves over an element
     * 
     * @see[W3C spec](https://www.w3.org/TR/uievents/#event-type-mousemove)
     * @see[ReactJS docs](https://reactjs.org/docs/events.html#mouse-events)
     */
    onMouseMove?: MouseEventHandler<HTMLElement>;
}

export interface KeyboardEventsProps {
    /**
     * A user presseed down a keyboard's key  
     * 
     * @see[W3C spec](https://www.w3.org/TR/uievents/#event-type-keydown)
     * @see[ReactJS docs](https://reactjs.org/docs/events.html#keyboard-events)
     */
    onKeyDown?: KeyboardEventHandler<HTMLElement>;
    /**
     * A user stoped pressing on a keyboard's key 
     * 
     * @see[W3C spec](https://www.w3.org/TR/uievents/#event-type-keyup)
     * @see[ReactJS docs](https://reactjs.org/docs/events.html#keyboard-events)
     */
    onKeyUp?: KeyboardEventHandler<HTMLElement>;
    /**
     * A user is pressing down and holding a keyboard's key 
     * 
     * @see[ReactJS docs](https://reactjs.org/docs/events.html#keyboard-events) 
     */
    onKeyPress?: KeyboardEventHandler<HTMLElement>; 
}
