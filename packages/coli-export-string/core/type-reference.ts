import { TypeReference } from "coli";
import { stringfy_tokenformatted, StringfyLanguage } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_type_reference(c: TypeReference, l: StringfyLanguage) {
  const ast = formatters.astfmt_type_reference(c);
  return stringfy_tokenformatted(ast);

  // return `${stringfy(c.typeName, { language: l })}`;
}
