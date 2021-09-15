import { ObjectLiteralExpression } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject, format } from "..";

export function astfmt_object_literal_expression(c: ObjectLiteralExpression) {
  const fmt = [
    f(SyntaxKind.OpenBraceToken),
    f("\n"),
    inject.insertBetween(
      // on each line ", "
      inject.onEach(format(c.properties), "\t"),
      [f(SyntaxKind.CommaToken), f("\n")]
    ),
    f("\n"),
    f(SyntaxKind.CloseBraceToken),
  ];
  return fmt;
}
