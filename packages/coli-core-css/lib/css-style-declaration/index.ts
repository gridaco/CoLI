import type { CSSProperties, CSSSimplePseudos } from "../index";

export type ElementCssStyleData = ElementCssProperties &
  ElementSimplePseudoStyleData;
export type ElementCssProperties = CSSProperties;
export type ElementSimplePseudoStyleData = {
  [key in CSSSimplePseudos]?: CSSProperties;
};
