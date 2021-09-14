import { LiteralType } from "coli";
import { stringfy_tokenformatted, StringfyLanguage } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_literal_type(c: LiteralType, l: StringfyLanguage) {
  const ast = formatters.astfmt_literal_type(c);
  return stringfy_tokenformatted(ast);

  // return `${stringfy(c.literal, { language: l })}`;
}
