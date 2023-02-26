import {
    rgbToHex,
    hexToRgb,
    rgbaToHex,
    hexToRgba,
    rgbToHsl,
    hslToRgb,
    hexToHsl,
    hslToHex,
    rgbaToHsla,
    hslaToRgba,
    hexToHsla,
    hslaToHex
} from '../../src/utils';

describe("Convert Colors", () => {
    test("should properly convert color from RGB to HEX", () => {
        expect(rgbToHex(127, 17, 224)).toBe('#7f11e0');
        expect(rgbToHex(238, 51, 255)).toBe('#ee33ff');
        expect(rgbToHex(69, 239, 124)).toBe('#45ef7c');
        expect(rgbToHex(167, 184, 211)).toBe('#a7b8d3');
    });
    test("should properly convert color from HEX to RGB", () => {
        expect(hexToRgb('#7f11e0')).toMatchObject({
            r: 127,
            g: 17,
            b: 224
        });
        expect(hexToRgb('#e3f')).toMatchObject({
            r: 238,
            g: 51,
            b: 255
        });
        expect(hexToRgb('#45ef7c')).toMatchObject({
            r: 69,
            g: 239,
            b: 124
        });
        expect(hexToRgb('#a7b8d3')).toMatchObject({
            r: 167,
            g: 184,
            b: 211
        });
    });
    test("should properly convert color from RGBA to HEX", () => {
        expect(rgbaToHex(127, 17, 224, 100)).toBe('#7f11e0ff');
        expect(rgbaToHex(127, 17, 224, 60)).toBe('#7f11e099');
        expect(rgbaToHex(238, 51, 255, 40)).toBe('#ee33ff66');
        expect(rgbaToHex(69, 239, 124, 84)).toBe('#45ef7cd6');
        expect(rgbaToHex(167, 184, 211, 91)).toBe('#a7b8d3e8');
    });
    test("should properly convert color from HEX to RGBA", () => {
        expect(hexToRgba('#7f11e0ff')).toMatchObject({
            r: 127,
            g: 17,
            b: 224,
            a: 100
        });
        expect(hexToRgba('#7f11e099')).toMatchObject({
            r: 127,
            g: 17,
            b: 224,
            a: 60
        });
        expect(hexToRgba('#e3f')).toMatchObject({
            r: 238,
            g: 51,
            b: 255
        });
        expect(hexToRgba('#e3f6')).toMatchObject({
            r: 238,
            g: 51,
            b: 255,
            a: 40
        });
        expect(hexToRgba('#45ef7cd6')).toMatchObject({
            r: 69,
            g: 239,
            b: 124,
            a: 84
        });
        expect(hexToRgba('#a7b8d3e8')).toMatchObject({
            r: 167,
            g: 184,
            b: 211,
            a: 91
        });
    });
    test("should properly convert color from RGB to HSL", () => {
        expect(rgbToHsl(127, 17, 224)).toMatchObject({
            h: 272,
            s: 86,
            l: 47
        });
        expect(rgbToHsl(238, 51, 255)).toMatchObject({
            h: 295,
            s: 100,
            l: 60
        });
        expect(rgbToHsl(69, 239, 124)).toMatchObject({
            h: 139,
            s: 84,
            l: 60
        });
        expect(rgbToHsl(167, 184, 211)).toMatchObject({
            h: 217,
            s: 33,
            l: 74
        });
    });
    test("should properly convert color from HSL to RGB", () => {
        expect(hslToRgb(272, 85.9, 47.3)).toMatchObject({
            r: 128,
            g: 17,
            b: 224
        });
        expect(hslToRgb(295, 100, 60)).toMatchObject({
            r: 238,
            g: 51,
            b: 255
        });
        expect(hslToRgb(139, 84.2, 60.4)).toMatchObject({
            r: 69,
            g: 239,
            b: 123
        });
        expect(hslToRgb(217, 33.3, 74.1)).toMatchObject({
            r: 167,
            g: 184,
            b: 211
        });
    });
    test("should properly convert color from HEX to HSL", () => {
        expect(hexToHsl('#7f11e0')).toMatchObject({
            h: 272,
            s: 86,
            l: 47
        });
        expect(hexToHsl('#e3f')).toMatchObject({
            h: 295,
            s: 100,
            l: 60
        });
        expect(hexToHsl('#45ef7c')).toMatchObject({
            h: 139,
            s: 84,
            l: 60
        });
        expect(hexToHsl('#a7b8d3')).toMatchObject({
            h: 217,
            s: 33,
            l: 74
        });
    });
    test("should properly convert color from HSL to HEX", () => {
        expect(hslToHex(272, 85.9, 47.3)).toBe('#8011e0');
        expect(hslToHex(295, 100, 60)).toBe('#ee33ff');
        expect(hslToHex(139, 84.2, 60.4)).toBe('#45ef7b');
        expect(hslToHex(217, 33.3, 74.1)).toBe('#a7b8d3');
    });
    test("should properly convert color from HSLA to RGBA", () => {
        expect(hslaToRgba(272, 85.9, 47.3, 100)).toMatchObject({
            r: 128,
            g: 17,
            b: 224,
            a: 100
        });
        expect(hslaToRgba(272, 85.9, 47.3, 60)).toMatchObject({
            r: 128,
            g: 17,
            b: 224,
            a: 60
        });
        expect(hslaToRgba(295, 100, 60, 100)).toMatchObject({
            r: 238,
            g: 51,
            b: 255,
            a: 100
        });
        expect(hslaToRgba(295, 100, 60, 40)).toMatchObject({
            r: 238,
            g: 51,
            b: 255,
            a: 40
        });
        expect(hslaToRgba(139, 84.2, 60.4, 84)).toMatchObject({
            r: 69,
            g: 239,
            b: 123,
            a: 84
        });
        expect(hslaToRgba(217, 33.3, 74.1, 91)).toMatchObject({
            r: 167,
            g: 184,
            b: 211,
            a: 91
        });
    });
    test("should properly convert color from RGBA to HSLA", () => {
        expect(rgbaToHsla(128, 17, 224, 100)).toMatchObject({
            h: 272,
            s: 86,
            l: 47,
            a: 100
        });
        expect(rgbaToHsla(128, 17, 224, 60)).toMatchObject({
            h: 272,
            s: 86,
            l: 47,
            a: 60
        });
        expect(rgbaToHsla(238, 51, 255, 100)).toMatchObject({
            h: 295,
            s: 100,
            l: 60,
            a: 100
        });
        expect(rgbaToHsla(238, 51, 255, 40)).toMatchObject({
            h: 295,
            s: 100,
            l: 60,
            a: 40
        });
        expect(rgbaToHsla(69, 239, 123, 84)).toMatchObject({
            h: 139,
            s: 84,
            l: 60,
            a: 84
        });
        expect(rgbaToHsla(167, 184, 211, 91)).toMatchObject({
            h: 217,
            s: 33,
            l: 74,
            a: 91
        });
    });
    test("should properly convert color from HSLA to HEX", () => {
        expect(hslaToHex(272, 85.9, 47.3, 100)).toBe('#8011e0ff');
        expect(hslaToHex(272, 85.9, 47.3, 60)).toBe('#8011e099');
        expect(hslaToHex(295, 100, 60, 40)).toBe('#ee33ff66');
        expect(hslaToHex(139, 84.2, 60.4, 84)).toBe('#45ef7bd6');
        expect(hslaToHex(217, 33.3, 74.1, 91)).toBe('#a7b8d3e8');
    });
    test("should properly convert color from HEX to HSLA", () => {
        expect(hexToHsla('#8011e0ff')).toMatchObject({
            h: 272,
            s: 86,
            l: 47,
            a: 100
        });
        expect(hexToHsla('#8011e099')).toMatchObject({
            h: 272,
            s: 86,
            l: 47,
            a: 60
        });
        expect(hexToHsla('#ee33ff66')).toMatchObject({
            h: 295,
            s: 100,
            l: 60,
            a: 40
        });
        expect(hexToHsla('#45ef7bd6')).toMatchObject({
            h: 139,
            s: 84,
            l: 60,
            a: 84
        });
        expect(hexToHsla('#a7b8d3e8')).toMatchObject({
            h: 217,
            s: 33,
            l: 74,
            a: 91
        });
    });
});
