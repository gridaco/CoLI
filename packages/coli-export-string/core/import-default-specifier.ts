import { ImportDefaultSpecifier } from "coli";
import { StringfyLanguage } from "..";

/**
 * @todo transpile lauganage
 * @todo value stringfy
 */
export function strfy_import_default_specifier(
  c: ImportDefaultSpecifier,
  l: StringfyLanguage
): string {
  const {
    local: { name },
  } = c;
  let code = `${name}`;

  return code;
}
