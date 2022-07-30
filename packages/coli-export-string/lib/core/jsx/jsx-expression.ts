import type { JSXExpression } from "@coli.codes/jsx-core";
import { formatters } from "@coli.codes/ast-formatter";
import { StringfyOptions, stringfy_tokenformatted } from "../..";

export function strfy_jsx_expression(
  c: JSXExpression,
  options: StringfyOptions
): string {
  const ast = formatters.astfmt_jsx_expression(c);
  return stringfy_tokenformatted(ast, options);
}
