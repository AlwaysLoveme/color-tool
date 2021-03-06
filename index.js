export function colorHexToRgb(hex) {
  const h = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (m, r, g, b) => r + r + g + g + b + b
  );
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
  return result ? result.slice(1).map((n) => parseInt(n, 16)) : null;
}

export function colorRgbToHex(r, g, b) {
  const result = [r, g, b]
    .map((n) => {
      const hex = n.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    })
    .join("");
  return `#${result}`;
}

export function colorRgbToHsl(r, g, b) {
  r /= 255; 
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h;
  if (d === 0) h = 0;
  else if (max === r) h = ((g - b) / d) % 6;
  else if (max === g) h = (b - r) / d + 2;
  else if (max === b) h = (r - g) / d + 4;
  const l = (min + max) / 2;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  if (h < 0) h = 360 / 60 + h;
  return [h * 60, s, l];
}

export function colorHslToRgb(h, s, l) {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hp = h / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let rgb1;
  if (Number.isNaN(h) || typeof h === "undefined") {
    rgb1 = [0, 0, 0];
  } else if (hp <= 1) rgb1 = [c, x, 0];
  else if (hp <= 2) rgb1 = [x, c, 0];
  else if (hp <= 3) rgb1 = [0, c, x];
  else if (hp <= 4) rgb1 = [0, x, c];
  else if (hp <= 5) rgb1 = [x, 0, c];
  else if (hp <= 6) rgb1 = [c, 0, x];
  const m = l - c / 2;
  return rgb1.map((n) => Math.max(0, Math.min(255, Math.round(255 * (n + m)))));
}

export function colorHsbToHsl(h, s, b) {
  const HSL = {
    h,
    s: 0,
    l: 0,
  };
  const HSB = { h, s, b };

  HSL.l = ((2 - HSB.s) * HSB.b) / 2;
  HSL.s =
    HSL.l && HSL.l < 1
      ? (HSB.s * HSB.b) / (HSL.l < 0.5 ? HSL.l * 2 : 2 - HSL.l * 2)
      : HSL.s;

  return [HSL.h, HSL.s, HSL.l];
}

export function colorHslToHsb(h, s, l) {
  const HSB = {
    h,
    s: 0,
    b: 0,
  };
  const HSL = { h, s, l };

  const t = HSL.s * (HSL.l < 0.5 ? HSL.l : 1 - HSL.l);
  HSB.b = HSL.l + t;
  HSB.s = HSL.l > 0 ? (2 * t) / HSB.b : HSB.s;

  return [HSB.h, HSB.s, HSB.b];
}
