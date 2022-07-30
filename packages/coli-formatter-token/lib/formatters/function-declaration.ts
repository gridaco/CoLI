import type { FunctionDeclaration } from "@coli.codes/core";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";

export function astfmt_function_declaration(c: FunctionDeclaration) {
  const { id, params, body, returnType, modifiers } = c;
  const parameters = inject.insertBetween(params, [
    f(SyntaxKind.CommaToken),
    f(" "),
  ]);

  const _modifiers = [
    f(modifiers.export),
    f(modifiers.default),
    f(modifiers.async),
  ].filter(Boolean);

  return [
    f("\n"),
    inject.insertBetween(_modifiers, f(" ")),
    _modifiers.length > 0 ? f(" ") : f(""),
    f(SyntaxKind.FunctionKeyword),
    f(" "),
    id,
    [f(SyntaxKind.OpenParenToken), parameters, f(SyntaxKind.CloseParenToken)],
    returnType ? [f(SyntaxKind.ColonToken), f(" "), returnType] : "",
    f(" "),
    body,
    f("\n"),
    f("\n"),
  ];
}
