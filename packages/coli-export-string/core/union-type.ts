import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { UnionType } from "coli";
import { stringfy_tokenformatted, StringfyLanguage } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_union_type(c: UnionType, l: StringfyLanguage): string {
  const ast = formatters.astfmt_union_type(c);
  return stringfy_tokenformatted(ast);

  // return c.types
  //   .map((t) => stringfy(t, { language: l }))
  //   .join(
  //     `${KeywordAndTokenStatic.BreakSpaceToken}${KeywordAndTokenStatic.BarToken}${KeywordAndTokenStatic.BreakSpaceToken}`
  //   );
}
