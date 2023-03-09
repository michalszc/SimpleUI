export interface BaseProps {
    /**
     * It is used to specify a unique id for component
     */
    id?: string;
    /**
     * Palette modes: `light` (the default) or `dark`
     */
    mode?: 'light' | 'dark';
    /**
     * Variant of the component
     */
    variant?: string;
    /**
     * Variant of the typography
     */
    typography?: string;
}
