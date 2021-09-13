import { ObjectLiteralExpression } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";

export function astfmt_object_literal_expression(c: ObjectLiteralExpression) {
  return [
    f(SyntaxKind.OpenBraceToken),
    inject.onEachLine(
      // on each line ", "
      c.properties,
      [SyntaxKind.CommaToken, " "]
    ),
    f(SyntaxKind.CloseBraceToken),
  ];
}
