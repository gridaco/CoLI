import { ObjectLiteralExpression } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { indent } from "..";

export function astfmt_object_literal_expression(c: ObjectLiteralExpression) {
  return [
    f(SyntaxKind.OpenBraceToken),
    indent.onEachLine(
      // TODO: on each line ", "
      c.properties
    ),
    f(SyntaxKind.CloseBraceToken),
  ];
}
