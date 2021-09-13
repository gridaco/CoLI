import { LiteralType } from "coli";
import { StringfyLanguage, stringfy } from "..";

export function strfy_literal_type(c: LiteralType, l: StringfyLanguage) {
  return `${stringfy(c.literal, { language: l })}`;
}
