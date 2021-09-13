import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { PropertySignature } from "coli";
import { StringfyLanguage, stringfy } from "..";

export function strfy_property_signature(
  c: PropertySignature,
  l: StringfyLanguage
) {
  const _opt = { language: l };
  const _questiontoken = c.questionToken
    ? KeywordAndTokenStatic.QuestionToken
    : "";
  const _typedef = stringfy(c.type, _opt); // TODO:
  return `${stringfy(c.name, _opt)}${_questiontoken}${
    _typedef
      ? `${KeywordAndTokenStatic.ColonToken}${KeywordAndTokenStatic.BreakSpaceToken}${_typedef}`
      : ""
  }`;
}
