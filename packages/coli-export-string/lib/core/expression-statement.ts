import type { ExpressionStatement } from "@coli.codes/core";
import { stringfy, StringfyOptions } from "../stringfy";

export function strfy_expression_statement(
  c: ExpressionStatement,
  l: StringfyOptions
): string {
  const { expression } = c;
  return stringfy(expression, l);
}
