import { formatters } from "@coli.codes/ast-formatter";
import { JSXSelfClosingElement } from "coli";
import { StringfyLanguage, stringfy_tokenformatted } from "../..";

export function strfy_jsx_self_closing_element(
  c: JSXSelfClosingElement,
  l: StringfyLanguage
): string {
  const ast = formatters.astfmt_jsx_self_closing_element(c);
  return stringfy_tokenformatted(ast);
}
