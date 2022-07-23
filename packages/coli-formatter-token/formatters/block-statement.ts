import { Block } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { format, inject } from "..";
export function astfmt_block(c: Block) {
  const { body } = c;
  const fbody = format(body);
  return [
    [f(SyntaxKind.OpenBraceToken)],
    inject.indents([f("\n"), fbody]),
    [f("\n"), f(SyntaxKind.CloseBraceToken)],
  ];
}
