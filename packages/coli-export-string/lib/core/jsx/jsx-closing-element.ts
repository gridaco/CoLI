import type { JSXClosingElement } from "@coli.codes/jsx-core";
import { formatters } from "@coli.codes/ast-formatter";
import { StringfyOptions, stringfy_tokenformatted } from "../..";

export function strfy_jsx_closing_element(
  c: JSXClosingElement,
  options: StringfyOptions
): string {
  const ast = formatters.astfmt_jsx_closing_element(c);
  return stringfy_tokenformatted(ast, options);
}
