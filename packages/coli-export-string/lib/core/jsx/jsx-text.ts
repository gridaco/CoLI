import type { JSXText } from "@coli.codes/jsx-core";
import { formatters } from "@coli.codes/ast-formatter";
import { StringfyOptions, stringfy_tokenformatted } from "../..";

export function strfy_jsx_text(c: JSXText, l: StringfyOptions): string {
  const ast = formatters.astfmt_jsx_text(c);
  return stringfy_tokenformatted(ast, l);
}
