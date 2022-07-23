import { formatters } from "@coli.codes/ast-formatter";
import { CallExpression } from "coli";
import { StringfyOptions, stringfy_tokenformatted } from "..";

export function strfy_call_expression(
  c: CallExpression,
  l: StringfyOptions
): string {
  const ast = formatters.astfmt_call_expression(c);
  return stringfy_tokenformatted(ast, l);
}
