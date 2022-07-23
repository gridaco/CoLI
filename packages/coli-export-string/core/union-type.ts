import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { UnionType } from "coli";
import { stringfy_tokenformatted, StringfyOptions } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_union_type(c: UnionType, l: StringfyOptions): string {
  const ast = formatters.astfmt_union_type(c);
  return stringfy_tokenformatted(ast, l);

  // return c.types
  //   .map((t) => stringfy(t, { language: l }))
  //   .join(
  //     `${KeywordAndTokenStatic.BreakSpaceToken}${KeywordAndTokenStatic.BarToken}${KeywordAndTokenStatic.BreakSpaceToken}`
  //   );
}
