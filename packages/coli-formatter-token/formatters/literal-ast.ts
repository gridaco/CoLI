import { Literal, TemplateLiteral } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";

export function astfmt_literal(c: Literal) {
  const { value } = c;
  const isTemplateLiteral = c instanceof TemplateLiteral;
  if (!isTemplateLiteral) {
    return value;
  } else if (isTemplateLiteral) {
    return [f(SyntaxKind.BacktickToken), value, f(SyntaxKind.BacktickToken)];
  }
}
