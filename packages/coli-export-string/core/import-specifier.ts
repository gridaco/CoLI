import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { ImportSpecifier } from "coli";
import { StringfyLanguage } from "..";
/**
 * @todo transpile lauganage
 * @todo value stringfy
 */
export function coliSpecifierImportStringfy(
  c: ImportSpecifier,
  l: StringfyLanguage
): string {
  const localName = c?.local?.name;
  const importedName = c?.imported?.name;
  let code = "";
  if (localName !== importedName) {
    code += `${localName}${KeywordAndTokenStatic.BreakSpaceToken}${KeywordAndTokenStatic.AsKeyword}${KeywordAndTokenStatic.BreakSpaceToken}${importedName}`;
  } else {
    code += `${localName}`;
  }

  return code;
}
