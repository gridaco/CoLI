import type { ObjectLiteralExpression } from "@coli.codes/core";
import { stringfy_tokenformatted, StringfyOptions } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_object_literal_expression(
  c: ObjectLiteralExpression,
  l?: StringfyOptions
) {
  const ast = formatters.astfmt_object_literal_expression(c);
  return stringfy_tokenformatted(ast, l);

  //   return `${KeywordAndTokenStatic.OpenBraceToken}
  // ${indent.onEachLine(
  //   stringfy(c.properties, {
  //     language: l,
  //     joinWith: `${KeywordAndTokenStatic.CommaToken}${KeywordAndTokenStatic.BreakLineToken}`,
  //   })
  // )}
  // ${KeywordAndTokenStatic.CloseBraceToken}`;
}
