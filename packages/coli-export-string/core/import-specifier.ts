import { ImportSpecifier } from "coli";
import { stringfy_tokenformatted, StringfyOptions } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_import_specifier(
  c: ImportSpecifier,
  l: StringfyOptions
): string {
  const ast = formatters.astfmt_import_specifier(c);
  return stringfy_tokenformatted(ast, l);

  // const localName = c?.local?.name;
  // const importedName = c?.imported?.name;
  // let code = "";
  // if (localName !== importedName) {
  //   code += `${localName}${KeywordAndTokenStatic.BreakSpaceToken}${KeywordAndTokenStatic.AsKeyword}${KeywordAndTokenStatic.BreakSpaceToken}${importedName}`;
  // } else {
  //   code += `${localName}`;
  // }

  // return code;
}
