import type { JSXElement } from "@coli.codes/jsx-core";
import { stringfy_tokenformatted, StringfyOptions } from "../..";
import { formatters } from "@coli.codes/ast-formatter";
export function strfy_jsx_element(
  c: JSXElement,
  options: StringfyOptions
): string {
  const ast = formatters.astfmt_jsx_element(c);
  return stringfy_tokenformatted(ast, options);
}
