import { formatters } from "@coli.codes/ast-formatter";
import { JSXExpression } from "coli";
import { StringfyOptions, stringfy_tokenformatted } from "../..";

export function strfy_jsx_expression(
  c: JSXExpression,
  options: StringfyOptions
): string {
  const ast = formatters.astfmt_jsx_expression(c);
  return stringfy_tokenformatted(ast, options);
}
