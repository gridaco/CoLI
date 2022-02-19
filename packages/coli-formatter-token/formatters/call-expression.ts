import { CallExpression } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject, format } from "..";

export function astfmt_call_expression(c: CallExpression) {
  // {expression}({arguments})
  const { expression, arguments: _arguments } = c;
  return [
    format(expression),
    f(SyntaxKind.OpenParenToken),
    inject.insertBetween(_arguments.map(format), [
      f(SyntaxKind.CommaToken),
      f(" "),
    ]),
    f(SyntaxKind.CloseParenToken),
  ];
}
