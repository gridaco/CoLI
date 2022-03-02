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
    f("\n"), // L-1 pre new line
    // L1:keywords
    inject.insertTrailing(
      inject.insertBetween(
        [f(modifiers.export), f(modifiers.default), f(modifiers.async)].filter(
          Boolean
        ),
        f(" ")
      ),
      f(" ")
    ),
    // L1: function
    f(SyntaxKind.FunctionKeyword),
    f(" "),
    // L1: function name
    id,
    f(" "),
    // L1: function params
    [f(SyntaxKind.OpenParenToken), parameters, f(SyntaxKind.CloseParenToken)],
    returnType ? [f(SyntaxKind.ColonToken), f(" "), returnType] : "",
    f(" "),
    body, // a block statement
    f("\n\n"), // trailing new line 1
  ];
}
