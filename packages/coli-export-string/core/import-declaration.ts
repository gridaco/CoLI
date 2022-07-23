import { ImportDeclaration } from "coli";
import { stringfy_tokenformatted, StringfyOptions } from "..";
import { formatters } from "@coli.codes/ast-formatter";

// import { convertValue } from "../utils/convert-value";

export function strfy_import_declaration(
  c: ImportDeclaration,
  l: StringfyOptions
): string {
  const ast = formatters.astfmt_import_declaration(c);
  return stringfy_tokenformatted(ast, l);

  // let code = `${KeywordAndTokenStatic.ImportKeyword}${KeywordAndTokenStatic.BreakSpaceToken}`;

  // // optional default import if default import provided.
  // if (c.defaultImport) {
  //   code += `${stringfy(c.defaultImport, { language: l })}`;
  // }

  // // if one or more than named import is specified.
  // if (c.imports.length > 0) {
  //   //
  //   if (c.defaultImport) {
  //     code += `${KeywordAndTokenStatic.CommaToken}${KeywordAndTokenStatic.BreakSpaceToken}`;
  //   }
  //   code += `${KeywordAndTokenStatic.OpenBraceToken}${KeywordAndTokenStatic.BreakSpaceToken}`;
  //   code += stringfy(c.imports, {
  //     language: l,
  //     joinWith: `${KeywordAndTokenStatic.CommaToken}${KeywordAndTokenStatic.BreakSpaceToken}`,
  //   });
  //   code += `${KeywordAndTokenStatic.BreakSpaceToken}${KeywordAndTokenStatic.CloseBraceToken}`;
  // }

  // // make source
  // code += `${KeywordAndTokenStatic.BreakSpaceToken}${
  //   KeywordAndTokenStatic.FromKeyword
  // }${KeywordAndTokenStatic.BreakSpaceToken}${convertValue(c.source, l)}`;

  // code += eo.FILALIZED_END_OF_LINE_TOKEN_VALUE;

  // return code;
}
