export * from "./css-named-colors";

/**
 * Css rgba data interface. r,g,b 0-255 a 0-1f
 */
export interface ICssRGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

export class CssHexColor {
  constructor(
    /**
     * full hex sring including `#` - e.g. `"#FFFFFF"`
     */
    readonly hex: string
  ) {}
}

export class CssRgbaFunctionColor {
  constructor(readonly rgba: ICssRGBA) {}
}
