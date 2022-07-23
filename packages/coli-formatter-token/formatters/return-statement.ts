import { JsxBaseElement } from "@coli.codes/jsx-core/elements";
import { ReturnStatement } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";

export function astfmt_return_statement(c: ReturnStatement) {
  const { argument } = c;
  if (argument instanceof JsxBaseElement) {
    // if jsx is the returning element, than wrap with "(" and ")"
    return [
      f(SyntaxKind.ReturnKeyword),
      f(" "),
      f(SyntaxKind.OpenParenToken),
      // FIXME: do -> inject.indent after formatting (argument)
      // currently the jsx is not using ast-formatter, so we can't do this the right way. fix the jsx formatter first.
      inject.indent([f("\n"), argument, f("\n")]),
      f(SyntaxKind.CloseParenToken),
    ];
  }
  return [f(SyntaxKind.ReturnKeyword), f(" "), argument];
}
