import { CssNamedColor, ICssRGBA } from "@coli.codes/core/css/css-color";

type HexColor = string;

type CssColorInputLike = CssNamedColor | HexColor | ICssRGBA;

export function makeCssColorValue(input: CssColorInputLike): string {
  if (!input) {
    console.warn(
      'undefined color is passed to "makeCssColorValue". check this.'
    );
    return "#000000; /*ERROR*/";
  }
  if (typeof input == "string") {
    // interpret as hex color or named color
    return input;
  } else if (input instanceof CssNamedColor) {
    return input.name;
  } else if ("r" in input && "a" in input) {
    const rgba = input as ICssRGBA;
    const validColorValue = (f: number) => {
      if (f === undefined) {
        return;
      }
      if (f < 1) {
        return Math.round(f * 255.0);
      } else {
        return Math.round(f);
      }
    };
    return `rgba(${validColorValue(rgba.r) ?? 0}, ${
      validColorValue(rgba.g) ?? 0
    }, ${validColorValue(rgba.b) ?? 0}, ${rgba.a ?? 1})`;
  } else {
    throw `input color "${JSON.stringify(
      input
    )}" cannot be interpreted as valid css color value`;
  }
}
