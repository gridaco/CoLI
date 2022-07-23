import { JSXClosingElement } from "coli";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import f from "../../tokens";
import { format } from "../../format";

export function astfmt_jsx_closing_element(c: JSXClosingElement) {
  const { name } = c;
  // </name>
  return [
    f(SyntaxKind.LessThanSlashToken),
    format(name),
    f(SyntaxKind.GreaterThanToken),
  ];
}
