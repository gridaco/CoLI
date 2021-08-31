import { UnionType } from "coli";
import { stringfy, StringfyLanguage } from "..";

export function _strfy_union_type(c: UnionType, l: StringfyLanguage): string {
  return c.types.map((t) => stringfy(t, { language: l })).join(" | ");
}
