import { Block } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { indent } from "..";
export function astfmt_block_statement(c: Block) {
  const { body } = c;
  return [
    f(SyntaxKind.OpenBraceToken),
    f("\n"),
    indent.onEachLine(body),
    f("\n"),
    f(SyntaxKind.CloseBraceToken),
    f(SyntaxKind.SemicolonToken),
    f("\n"),
  ];
}
