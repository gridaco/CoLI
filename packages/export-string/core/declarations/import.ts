import {
  ImportDeclaration,
  ImportDefaultSpecifier,
  ImportSpecifier,
} from "coli/lib/declarations/import";
import { stringfy, StringfyLanguage } from "../..";
import { converValue } from "../../utils/convert-value";

const inBraket = /\{(.*?)\}/g;

/**
 * @todo transpile lauganage
 * @todo value stringfy
 */
export function coliImportStringfy(
  c: ImportDeclaration,
  l: StringfyLanguage
): string {
  const { source, specifiers } = c;
  let code = "import ";
  const baseImportSpecifiers = stringfy(specifiers, {
    language: l,
    arrayDivison: ", ",
  }).match(inBraket);

  console.log(baseImportSpecifiers);
  code += `${stringfy(specifiers, { language: l, arrayDivison: ", " })}`;

  code += ` from ${converValue(source, l)}`;

  // const importSpecifiers = specifiers.reduce((acc, specifier) => {
  //   if (specifier instanceof ImportDefaultSpecifier) {
  //     _specifiers.push(`${specifier.local.name}`);
  //   }

  //   if (specifier instanceof ImportSpecifier) {
  //     const {
  //       imported: { name: importedName },
  //       local: { name: localName },
  //     } = specifier;

  //     if (importedName != localName) {
  //       acc.push(`${importedName} as ${localName}`);
  //     } else {
  //       acc.push(`${specifier.imported.name}`);
  //     }
  //   }

  //   return acc;
  // }, []);

  // if (importSpecifiers.length != 0) {
  //   _specifiers.push(`{ ${importSpecifiers.join(", ")} }`);
  // }

  // code += `${_specifiers.join(", ")} from ${converValue(source, l)}`;

  return code;
}
