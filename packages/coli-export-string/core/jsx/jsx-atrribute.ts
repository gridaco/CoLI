import { formatters } from "@coli.codes/ast-formatter";
import { JSXAttribute } from "coli";
import { stringfy_tokenformatted, StringfyOptions } from "../..";

export function strfy_jsx_attribute(
  atrribute: JSXAttribute,
  options: StringfyOptions
) {
  const ast = formatters.astfmt_jsx_attribute(atrribute);
  return stringfy_tokenformatted(ast, options);
}
