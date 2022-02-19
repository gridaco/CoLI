import { ExpressionStatement, StringfyLanguage } from "coli";
import { stringfy } from "../stringfy";

export function strfy_expression_statement(
  c: ExpressionStatement,
  l: StringfyLanguage
): string {
  const { expression } = c;
  return stringfy(expression);
}
