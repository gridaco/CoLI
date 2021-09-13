import { FunctionDeclaration } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";

export function astfmt_function_declaration(c: FunctionDeclaration) {
  const { id, params, body, returnType } = c;
  return [
    f(SyntaxKind.FunctionKeyword),
    f(" "),
    id,
    f(" "),
    [
      f(SyntaxKind.OpenParenToken),
      inject.insertBetween(params, [f(SyntaxKind.CommaToken), f(" ")]),
      f(SyntaxKind.CloseParenToken),
    ],
    returnType ? [f(SyntaxKind.ColonToken), f(" "), returnType] : "",
    // add body block
    body,
    f("\n"),
  ];
}
