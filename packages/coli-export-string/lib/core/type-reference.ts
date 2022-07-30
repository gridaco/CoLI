import type { TypeReference } from "@coli.codes/core";
import { stringfy_tokenformatted, StringfyOptions } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_type_reference(c: TypeReference, l: StringfyOptions) {
  const ast = formatters.astfmt_type_reference(c);
  return stringfy_tokenformatted(ast, l);

  // return `${stringfy(c.typeName, { language: l })}`;
}
