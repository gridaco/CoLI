import { formatters } from "@coli.codes/ast-formatter";
import { JSXOpeningElement } from "coli";
import { StringfyOptions, stringfy_tokenformatted } from "../..";

export function strfy_jsx_opening_element(
  c: JSXOpeningElement,
  l: StringfyOptions
): string {
  const ast = formatters.astfmt_jsx_opening_element(c);
  return stringfy_tokenformatted(ast, l);
}
