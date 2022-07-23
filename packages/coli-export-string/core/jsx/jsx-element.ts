import { JSXElement } from "coli";
import { stringfy_tokenformatted, StringfyLanguage } from "../..";
import { formatters } from "@coli.codes/ast-formatter";
export function strfy_jsx_element(c: JSXElement, l: StringfyLanguage): string {
  const ast = formatters.astfmt_jsx_element(c);
  return stringfy_tokenformatted(ast);
}
