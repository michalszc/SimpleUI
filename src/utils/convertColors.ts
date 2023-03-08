import { round, isNil } from "lodash";

/**
 * Converts rgb to hex
 * @param r - red
 * @param g - green
 * @param b - blue 
 * @returns hex value
 */
export const rgbToHex = (r: number, g: number, b: number) => 
    "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);

/**
 * Converts hex to rgb
 * @param h - hex
 * @returns rgb value
 */
export function hexToRgb(h: string) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hex = h.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result && {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  };
}

/**
 * Converts rgba to hex
 * @param r - red
 * @param g - green
 * @param b - blue 
 * @param a - alpha
 * @returns hex value
 */
export const rgbaToHex = (r: number, g: number, b: number, a: number) => 
  rgbToHex(r,g,b) + (round(255 * a / 100) | 1 << 8).toString(16).slice(1);

/**
 * Converts hex to rgba 
 * @param h - hex 
 * @returns rgba value
 */
export function hexToRgba(h: string) {
    // remove invalid characters
    let hex = h.replace(/[^0-9a-fA-F]/g, '');

    if (hex.length < 5) { 
        // 3, 4 characters double-up
        hex = hex.split('').map(s => s + s).join('');
    }
    
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})(([a-f\d]{2}))?$/i.exec(hex);

    return result && {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: !isNil(result[4]) ? round((parseInt(result[4], 16) / 255) * 100) : 100
    };
}

/**
 * Converts rgb to hsl
 * @param r - red
 * @param g - green
 * @param b - blue 
 * @returns hsl value
 */
export const rgbToHsl = (r: number, g: number, b: number) => {
    const _r = r / 255;
    const _g = g / 255;
    const _b = b / 255;

    const cmin = Math.min(_r, _g, _b);
    const cmax = Math.max(_r, _g, _b);
    const delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;

    if (delta === 0) {
       h = 0;
    } else if (cmax === _r) {
      h = ((_g - _b) / delta) % 6;
    } else if (cmax === _g) {
      h = (_b - _r) / delta + 2;
    } else {
      h = (_r - _g) / delta + 4;
    }

    h = Math.round(h * 60);
    
    if (h < 0)
      h += 360;			

    l = (cmax + cmin) / 2;

    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    s = Number((s * 100).toFixed(1));
    l = Number((l * 100).toFixed(1));

    return {
      h, l, s
    };
};

/**
 * Converts hsl to rgb
 * @param h - hue 
 * @param s - saturation 
 * @param l - lightness
 * @returns rgb value
 */
export const hslToRgb = (h: number, s: number, l: number) => {
  const _s = s / 100;
  const _l = l / 100;

  const c = (1 - Math.abs(2 * _l - 1)) * _s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = _l - c/2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;  
  } else if (60 <= h && h < 120) {
    r = x;
    g = c; 
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return {
    r, g, b
  };
};

/**
 * Converts hex to hsl
 * @param h - hex
 * @returns hsl value
 */
export const hexToHsl = (h: string) => {
  const { r, g, b } = hexToRgb(h)!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

  return rgbToHsl(r,g,b);
};

/**
 * Converts hsl to hex
 * @param h - hue 
 * @param s - saturation 
 * @param l - lightness
 * @returns hex value
 */
export const hslToHex = (h: number, s: number, l: number) => {
  const { r, g, b } = hslToRgb(h, s, l)!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

  return rgbToHex(r, g, b);
};

/**
 * Converts rgba to hsla
 * @param r - red
 * @param g - green
 * @param b - blue 
 * @param a - alpha 
 * @returns hsla value
 */
export const rgbaToHsla = (r: number, g: number, b: number, a: number) => {
  const { h, s, l } = rgbToHsl(r,g,b);

  return {
    h, s, l, a
  };
};

/**
 * Converts hsla to rgba
 * @param h - hue 
 * @param s - saturation 
 * @param l - lightness
 * @param a - alpha 
 * @returns rgba value
 */
export const hslaToRgba = (h: number, s: number, l: number, a: number) => {
  const { r, g, b } = hslToRgb(h, s, l)!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

  return {
    r, g, b, a
  };
};

/**
 * Converts hex to hsla
 * @param h - hex 
 * @returns hex value
 */
export const hexToHsla = (h: string) => {
  const { r, g, b, a } = hexToRgba(h)!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

  return rgbaToHsla(r, g, b, a);
};

/**
 * Converts hsla to hex
 * @param h - hue 
 * @param s - saturation 
 * @param l - lightness
 * @param a - alpha 
 * @returns hex value
 */
export const hslaToHex = (h: number, s: number, l: number, a: number) => {
  const { r, g, b, a: _a } = hslaToRgba(h, s, l, a)!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

  return rgbaToHex(r, g, b, _a);
};
