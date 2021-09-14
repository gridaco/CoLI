import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { PropertyAssignment } from "coli";
import { stringfy_tokenformatted, StringfyLanguage } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_property_assignment(
  c: PropertyAssignment,
  l: StringfyLanguage
) {
  const ast = formatters.astfmt_property_assignment(c);
  return stringfy_tokenformatted(ast);

  // const _opt = { language: l };
  // return `${stringfy(c.name, _opt)}${KeywordAndTokenStatic.ColonToken}${
  //   KeywordAndTokenStatic.BreakSpaceToken
  // }${stringfy(c.initializer, _opt)}`;
}
