import { InterfaceDeclaration } from "coli";

import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { indent } from "..";

export function astfmt_interface_declaration(c: InterfaceDeclaration) {
  return [
    f(SyntaxKind.InterfaceKeyword),
    f(" "),
    c.name,
    f(" "),
    f(SyntaxKind.OpenBraceToken),
    indent.onEachLine(c.members),
    f(SyntaxKind.CloseBraceToken),
  ];
}
