import { KeyboardEventHandler } from "react";

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
