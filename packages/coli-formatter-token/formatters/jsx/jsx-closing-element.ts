import { JSXClosingElement } from "coli";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import f from "../../tokens";

export function astfmt_jsx_closing_element(c: JSXClosingElement) {
  const { name } = c;
  return [
    f(SyntaxKind.LessThanSlashToken),
    name,
    f(SyntaxKind.GreaterThanToken),
  ];
}
