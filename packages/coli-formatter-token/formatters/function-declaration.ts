import { FunctionDeclaration } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";

export function astfmt_function_declaration(c: FunctionDeclaration) {
  const { id, params, body, returnType } = c;
  const parameters = inject.insertBetween(params, [
    f(SyntaxKind.CommaToken),
    f(" "),
  ]);

  return [
    f(SyntaxKind.FunctionKeyword),
    f(" "),
    id,
    f(" "),
    [f(SyntaxKind.OpenParenToken), parameters, f(SyntaxKind.CloseParenToken)],
    returnType ? [f(SyntaxKind.ColonToken), f(" "), returnType] : "",
    // add body block
    body,
    f("\n"),
  ];
}
