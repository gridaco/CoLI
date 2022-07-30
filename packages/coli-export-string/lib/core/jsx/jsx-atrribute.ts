import type { JSXAttribute } from "@coli.codes/jsx-core";
import { formatters } from "@coli.codes/ast-formatter";
import { stringfy_tokenformatted, StringfyOptions } from "../..";

export function strfy_jsx_attribute(
  atrribute: JSXAttribute,
  options: StringfyOptions
) {
  const ast = formatters.astfmt_jsx_attribute(atrribute);
  return stringfy_tokenformatted(ast, options);
}
