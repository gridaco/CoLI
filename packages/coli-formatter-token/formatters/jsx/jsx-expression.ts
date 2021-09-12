import { SyntaxKind } from "@coli.codes/core/_internal";
import { JSXExpression } from "coli";
import f from "../../tokens";

export function astfmt_jsx_expression(c: JSXExpression) {
  const { expression } = c;
  return [
    f(SyntaxKind.OpenBraceToken),
    expression,
    f(SyntaxKind.CloseBraceToken),
  ];
}
