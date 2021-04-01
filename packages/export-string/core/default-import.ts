import {
  ImportDefaultSpecifier,
} from "coli/lib/declarations/import";
import { StringfyLanguage } from "..";

/**
 * @todo transpile lauganage
 * @todo value stringfy
 */
export function coliDefaultImportStringfy(
  c: ImportDefaultSpecifier,
  l: StringfyLanguage
): string {
  const {
    local: { name },
  } = c;
  let code = `${name}`;

  return code;
}
