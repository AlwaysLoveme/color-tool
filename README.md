# color-tool
一款hex颜色值、rgb颜色值、hsl颜色值、hsb互相转换的工具函数
## Install

```bash
npm install color-tool
```
eg:
```js
import {colorHexToRgb} from "color-tool";

const hexRgb = colorHexToRgb("#FF80ED");
console.log(hexRgb);

···
```
## colorHexToRgb
<docgen-index>

* [`colorHexToRgb(hex: string): number[]`](#start)

</docgen-index>

## colorRgbToHex
<docgen-index>

* [`colorRgbToHex(r: number, g: number, b: number): string`](#start)

</docgen-index>

## colorRgbToHsl
<docgen-index>

* [`colorRgbToHsl(r: number, g: number, b: number): number[]`](#start)

</docgen-index>

## colorHslToRgb
<docgen-index>

* [`colorHslToRgb(h: number, s: number, l: number): number[]`](#start)

</docgen-index>

## colorHsbToHsl
<docgen-index>

* [`colorHsbToHsl(h: number, s: number, b: number): number[]`](#start)

</docgen-index>

## colorHslToHsb
<docgen-index>

* [`colorHslToHsb(h: number, s: number, l: number): number[]`](#start)

</docgen-index>

### Interfaces

### Thanks Framework7
[framework7](https://framework7.io/)