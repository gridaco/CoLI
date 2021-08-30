import { PropertySignature } from "coli";
import { StringfyLanguage, stringfy } from "..";

export function _strfy_property_signature(
  c: PropertySignature,
  l: StringfyLanguage
) {
  const _opt = { language: l };
  const _questiontoken = c.questionToken ? "?" : "";
  const _typedef = c.type; // TODO:
  return `${stringfy(c.name, _opt)}${_questiontoken}: ${_typedef}`;
}
