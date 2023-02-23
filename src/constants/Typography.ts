import type * as CSS from "csstype";

export interface TypographyVariant {
    fontFamily?: CSS.Property.FontFamily;
    fontSize?: CSS.Property.FontSize;
    fontStyle?: CSS.Property.FontStyle;
    fontVariant?: CSS.Property.FontVariant;
    lineHeight?: CSS.Property.LineHeight;
    letterSpacing?: CSS.Property.LetterSpacing;
}

export interface ITypography {
    // media queries or variant
    [index: string]: TypographyVariant;
}

/**
 * Default typography variants
 */
const Typography: ITypography = {
    default: {
        fontFamily: 'Menlo, monospace',
        fontSize: '14px',
        fontStyle: 'normal',
        fontVariant: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal'
    }
};

export default Typography;
