import { JSXElement } from "coli";
import { stringfy_tokenformatted, StringfyOptions } from "../..";
import { formatters } from "@coli.codes/ast-formatter";
export function strfy_jsx_element(
  c: JSXElement,
  options: StringfyOptions
): string {
  const ast = formatters.astfmt_jsx_element(c);
  return stringfy_tokenformatted(ast, options);
}
