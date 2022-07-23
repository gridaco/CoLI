import { formatters } from "@coli.codes/ast-formatter";
import { JSXClosingElement } from "coli";
import { StringfyLanguage, stringfy_tokenformatted } from "../..";

export function strfy_jsx_closing_element(
  c: JSXClosingElement,
  l: StringfyLanguage
): string {
  const ast = formatters.astfmt_jsx_closing_element(c);
  return stringfy_tokenformatted(ast);
}
