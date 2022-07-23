import { ImportDefaultSpecifier } from "coli";
import { stringfy_tokenformatted, StringfyOptions } from "..";
import { formatters } from "@coli.codes/ast-formatter";

/**
 * @todo transpile lauganage
 * @todo value stringfy
 */
export function strfy_import_default_specifier(
  c: ImportDefaultSpecifier,
  l: StringfyOptions
): string {
  const ast = formatters.astfmt_import_default_specifier(c);
  return stringfy_tokenformatted(ast, l);

  // const {
  //   local: { name },
  // } = c;
  // let code = `${name}`;

  // return code;
}
