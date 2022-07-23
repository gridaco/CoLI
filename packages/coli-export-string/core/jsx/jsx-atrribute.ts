import { formatters } from "@coli.codes/ast-formatter";
import { JSXAttribute } from "coli";
import { stringfy_tokenformatted, StringfyLanguage } from "../..";

export function strfy_jsx_attribute(
  atrribute: JSXAttribute,
  l: StringfyLanguage
) {
  const ast = formatters.astfmt_jsx_attribute(atrribute);
  return stringfy_tokenformatted(ast);
}
