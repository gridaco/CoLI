import { TypeReference } from "coli";
import { StringfyLanguage, stringfy } from "..";

export function _strfy_type_reference(c: TypeReference, l: StringfyLanguage) {
  return `${stringfy(c.typeName, { language: l })}`;
}
