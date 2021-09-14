import { ExportAssignment } from "@coli.codes/core/assignment/export-assignment";
import { stringfy_tokenformatted, StringfyLanguage } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_export_assignment(
  c: ExportAssignment,
  l: StringfyLanguage
) {
  const ast = formatters.astfmt_export_assignment(c);
  return stringfy_tokenformatted(ast);
  // const _identifier = stringfy(identifier, {
  //   language: l,
  // });

  // let line = `${KeywordAndTokenStatic.ExportKeyword} ${KeywordAndTokenStatic.DefaultKeyword} ${_identifier}`;
  // line += eo.FILALIZED_END_OF_LINE_TOKEN_VALUE;

  // return line;
}
