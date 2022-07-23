import { formatters } from "@coli.codes/ast-formatter";
import { JSXClosingElement } from "coli";
import { StringfyOptions, stringfy_tokenformatted } from "../..";

export function strfy_jsx_closing_element(
  c: JSXClosingElement,
  options: StringfyOptions
): string {
  const ast = formatters.astfmt_jsx_closing_element(c);
  return stringfy_tokenformatted(ast, options);
}
