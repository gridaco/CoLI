import { ObjectLiteralExpression } from "coli";
import { stringfy_tokenformatted, StringfyLanguage } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_object_literal_expression(
  c: ObjectLiteralExpression,
  l?: StringfyLanguage
) {
  const ast = formatters.astfmt_object_literal_expression(c);
  return stringfy_tokenformatted(ast);

  //   return `${KeywordAndTokenStatic.OpenBraceToken}
  // ${indent.onEachLine(
  //   stringfy(c.properties, {
  //     language: l,
  //     joinWith: `${KeywordAndTokenStatic.CommaToken}${KeywordAndTokenStatic.BreakLineToken}`,
  //   })
  // )}
  // ${KeywordAndTokenStatic.CloseBraceToken}`;
}
