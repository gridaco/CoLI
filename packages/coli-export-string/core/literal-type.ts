import { LiteralType } from "coli";
import { stringfy_tokenformatted, StringfyOptions } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_literal_type(c: LiteralType, l: StringfyOptions) {
  const ast = formatters.astfmt_literal_type(c);
  return stringfy_tokenformatted(ast, l);

  // return `${stringfy(c.literal, { language: l })}`;
}
