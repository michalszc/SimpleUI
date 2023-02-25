import { round, isNil } from "lodash";

export const RGBToHex = (r: number, g: number, b: number) => 
    "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);

export function hexToRGB(h: string) {
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

export const RGBAToHexa = (r: number, g: number, b: number, a: number) => 
  RGBToHex(r,g,b) + (round(255 * a / 100) | 1 << 8).toString(16).slice(1);

export function hexToRGBA(h: string) {
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

export const RGBToHsl = (r: number, g: number, b: number) => {
  const _r = r / 255;
  const _g = g / 255;
  const _b = b / 255;

  const max = Math.max(_r, _g, _b);
  const min = Math.min(_r, _g, _b);

  let h = 0;
  let s = 0;
  const l = ((max + min) / 2) * 100;

  if (max !== min) {
    const d = max - min;
    s = (l > 50 ? d / (2 - max - min) : d / (max + min)) * 100;
    switch (max) {
      case _r:
        h = ((_g - _b) / d + (_g < _b ? 6 : 0)) * 360;
        break;
      case _g:
        h = ((_b - _r) / d + 2) * 360;
        break;
      case _b:
        h = ((_r - _g) / d + 4) * 360;
        break;
    }
    h /= 6;
  }
  
  return {
    h: round(h),
    s: round(s, 1),
    l: round(l, 1)
  };
}
