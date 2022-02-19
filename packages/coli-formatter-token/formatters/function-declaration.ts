import { FunctionDeclaration } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";

export function astfmt_function_declaration(c: FunctionDeclaration) {
  const { id, params, body, returnType, modifiers } = c;
  const parameters = inject.insertBetween(params, [
    f(SyntaxKind.CommaToken),
    f(" "),
  ]);

  return [
    f("\n"),
    inject.insertBetween(
      [f(modifiers.export), f(modifiers.default), f(modifiers.async)].filter(
        Boolean
      ),
      f(" ")
    ),
    f(" "),
    f(SyntaxKind.FunctionKeyword),
    f(" "),
    id,
    f(" "),
    [f(SyntaxKind.OpenParenToken), parameters, f(SyntaxKind.CloseParenToken)],
    returnType ? [f(SyntaxKind.ColonToken), f(" "), returnType] : "",
    f(" "),
    body,
    f("\n"),
    f("\n"),
  ];
}
