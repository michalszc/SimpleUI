
export interface IZindices {
    [index: string]: number | string;
}

/**
 * Default z-index values
 */
const Zindices = {
    hide: -1,
    base: 0,
    docked: 10,
    dropdown: 100,
    sticky: 200,
    banner: 300,
    overlay: 400,
    modal: 500,
    popover: 600,
    tooltip: 700,
    toast: 800
};

export default Zindices;
