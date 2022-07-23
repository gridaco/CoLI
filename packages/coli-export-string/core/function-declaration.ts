import { FunctionDeclaration } from "coli";
import { stringfy, stringfy_tokenformatted, StringfyOptions } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_function_declaration(
  c: FunctionDeclaration,
  options: StringfyOptions
): string {
  const ast = formatters.astfmt_function_declaration(c);
  return stringfy_tokenformatted(ast, options);
}
