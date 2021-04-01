import { ImportSpecifier } from "coli/lib/declarations/import";
import { StringfyLanguage } from "..";
/**
 * @todo transpile lauganage
 * @todo value stringfy
 */
export function coliSpecifierImportStringfy(
  c: ImportSpecifier,
  l: StringfyLanguage
): string {
  const {
    local: { name: localName },
    imported: { name: importedName },
  } = c;
  let code = `{ `;
  if (localName !== importedName) {
    code += `${localName} as ${importedName}`;
  } else {
    code += `${localName}`;
  }

  code += " }";

  return code;
}
