import { Block } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";
export function astfmt_block(c: Block) {
  const { body } = c;
  return [
    f(SyntaxKind.OpenBraceToken),
    f("\n"),
    inject.onEachLine(body, "\t"),
    f("\n"),
    f(SyntaxKind.CloseBraceToken),
    f("\n"),
  ];
}
