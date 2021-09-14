import { ImportDefaultSpecifier } from "coli";
import { stringfy_tokenformatted, StringfyLanguage } from "..";
import { formatters } from "@coli.codes/ast-formatter";

/**
 * @todo transpile lauganage
 * @todo value stringfy
 */
export function strfy_import_default_specifier(
  c: ImportDefaultSpecifier,
  l: StringfyLanguage
): string {
  const ast = formatters.astfmt_import_default_specifier(c);
  return stringfy_tokenformatted(ast);

  // const {
  //   local: { name },
  // } = c;
  // let code = `${name}`;

  // return code;
}
