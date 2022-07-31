export type {
  SimplePseudos as CSSSimplePseudos,
  isSimplePseudos,
} from "./simple-pseudos";
export type { PropertiesHyphen as CSSProperties } from "csstype";
export type { Property as CSSProperty } from "csstype";
export type {
  ElementCssStyleData,
  ElementCssProperties,
  ElementSimplePseudoStyleData,
} from "./css-style-declaration";

export { buildCSSBody as buildCssStandard } from "./builder";
export * from "./css-color";
export * from "./css-style-declaration";
export * from "./builder";
