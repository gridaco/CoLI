import { ExpressionStatement, StringfyOptions } from "coli";
import { stringfy } from "../stringfy";

export function strfy_expression_statement(
  c: ExpressionStatement,
  l: StringfyOptions
): string {
  const { expression } = c;
  return stringfy(expression, l);
}
