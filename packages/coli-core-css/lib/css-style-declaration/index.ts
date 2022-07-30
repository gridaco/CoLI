import type { CSSProperties, CSSSimplePseudos } from "..";

export type ElementCssStyleData = ElementCssProperties &
  ElementSimplePseudoStyleData;
export type ElementCssProperties = CSSProperties;
export type ElementSimplePseudoStyleData = {
  [key in CSSSimplePseudos]?: CSSProperties;
};
