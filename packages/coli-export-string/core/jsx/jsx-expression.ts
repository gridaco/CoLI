import { formatters } from "@coli.codes/ast-formatter";
import { JSXExpression } from "coli";
import { StringfyLanguage, stringfy_tokenformatted } from "../..";

export function strfy_jsx_expression(
  c: JSXExpression,
  l: StringfyLanguage
): string {
  const ast = formatters.astfmt_jsx_expression(c);
  return stringfy_tokenformatted(ast);
}
