import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { PropertyAssignment } from "coli";
import { StringfyLanguage, stringfy } from "..";

export function _strfy_property_assignment(
  c: PropertyAssignment,
  l: StringfyLanguage
) {
  const _opt = { language: l };
  return `${stringfy(c.name, _opt)}${KeywordAndTokenStatic.ColonToken}${
    KeywordAndTokenStatic.BreakSpaceToken
  }${stringfy(c.initializer, _opt)}`;
}
