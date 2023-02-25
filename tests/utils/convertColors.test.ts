import {
    RGBToHex,
    hexToRGB,
    RGBAToHexa,
    hexToRGBA,
    RGBToHsl
} from '../../src/utils';

describe("Convert Colors", () => {
    test("should properly convert color from RGB to HEX", () => {
        expect(RGBToHex(127, 17, 224)).toBe('#7f11e0');
        expect(RGBToHex(238, 51, 255)).toBe('#ee33ff');
        expect(RGBToHex(69, 239, 124)).toBe('#45ef7c');
        expect(RGBToHex(167, 184, 211)).toBe('#a7b8d3');
    });
    test("should properly convert color from HEX to RGB", () => {
        expect(hexToRGB('#7f11e0')).toMatchObject({
            r: 127,
            g: 17,
            b: 224
        });
        expect(hexToRGB('#e3f')).toMatchObject({
            r: 238,
            g: 51,
            b: 255
        });
        expect(hexToRGB('#45ef7c')).toMatchObject({
            r: 69,
            g: 239,
            b: 124
        });
        expect(hexToRGB('#a7b8d3')).toMatchObject({
            r: 167,
            g: 184,
            b: 211
        });
    });
    test("should properly convert color from RGBA to HEXA", () => {
        expect(RGBAToHexa(127, 17, 224, 100)).toBe('#7f11e0ff');
        expect(RGBAToHexa(127, 17, 224, 60)).toBe('#7f11e099');
        expect(RGBAToHexa(238, 51, 255, 40)).toBe('#ee33ff66');
        expect(RGBAToHexa(69, 239, 124, 84)).toBe('#45ef7cd6');
        expect(RGBAToHexa(167, 184, 211, 91)).toBe('#a7b8d3e8');
    });
    test("should properly convert color from HEX to RGBA", () => {
        expect(hexToRGBA('#7f11e0ff')).toMatchObject({
            r: 127,
            g: 17,
            b: 224,
            a: 100
        });
        expect(hexToRGBA('#7f11e099')).toMatchObject({
            r: 127,
            g: 17,
            b: 224,
            a: 60
        });
        expect(hexToRGBA('#e3f')).toMatchObject({
            r: 238,
            g: 51,
            b: 255
        });
        expect(hexToRGBA('#e3f6')).toMatchObject({
            r: 238,
            g: 51,
            b: 255,
            a: 40
        });
        expect(hexToRGBA('#45ef7cd6')).toMatchObject({
            r: 69,
            g: 239,
            b: 124,
            a: 84
        });
        expect(hexToRGBA('#a7b8d3e8')).toMatchObject({
            r: 167,
            g: 184,
            b: 211,
            a: 91
        });
    });
    test("should properly convert color from RGB to HSL", () => {
        expect(RGBToHsl(127, 17, 224)).toMatchObject({
            h: 272,
            s: 85.9,
            l: 47.3
        });
        expect(RGBToHsl(238, 51, 255)).toMatchObject({
            h: 295,
            s: 100.0,
            l: 60.0
        });
        expect(RGBToHsl(69, 239, 124)).toMatchObject({
            h: 139,
            s: 84.2,
            l: 60.4
        });
        expect(RGBToHsl(167, 184, 211)).toMatchObject({
            h: 217,
            s: 33.3,
            l: 74.1
        });
    });
});
