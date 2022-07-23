import { Block } from "coli";
import { StringfyOptions, stringfy_tokenformatted } from "..";
import { formatters } from "@coli.codes/ast-formatter";
export function strfy_block(c: Block, options: StringfyOptions): string {
  const ast = formatters.astfmt_block(c);
  return stringfy_tokenformatted(ast, options);
}
