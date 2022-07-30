import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import type { JSXExpression } from "@coli.codes/jsx-core";
import f from "../../tokens";

export function astfmt_jsx_expression(c: JSXExpression) {
  const { expression } = c;
  return [
    f(SyntaxKind.OpenBraceToken),
    expression,
    f(SyntaxKind.CloseBraceToken),
  ];
}
