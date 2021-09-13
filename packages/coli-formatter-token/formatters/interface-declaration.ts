import { InterfaceDeclaration } from "coli";

import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";

export function astfmt_interface_declaration(c: InterfaceDeclaration) {
  return [
    f(SyntaxKind.InterfaceKeyword),
    f(" "),
    c.name,
    f(" "),
    f(SyntaxKind.OpenBraceToken),
    inject.onEachLine(c.members, "\t"),
    f(SyntaxKind.CloseBraceToken),
  ];
}
