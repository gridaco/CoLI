import {
  ImportDeclaration,
  ImportDefaultSpecifier,
  ImportSpecifier,
} from "coli/lib/declarations/import";
import { StringfyLanguage } from "../..";
import { converValue } from "../../utils/convert-value";

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
  let _specifiers = [];

  const importSpecifiers = specifiers.reduce((acc, specifier) => {
    if (specifier instanceof ImportDefaultSpecifier) {
      _specifiers.push(`${specifier.local.name}`);
    }

    if (specifier instanceof ImportSpecifier) {
      const {
        imported: { name: importedName },
        local: { name: localName },
      } = specifier;

      if (importedName != localName) {
        acc.push(`${importedName} as ${localName}`);
      } else {
        acc.push(`${specifier.imported.name}`);
      }
    }

    return acc;
  }, []);

  if (importSpecifiers.length != 0) {
    _specifiers.push(`{ ${importSpecifiers.join(", ")} }`);
  }

  code += `${_specifiers.join(", ")} from ${converValue(source, l)}`;

  return code;
}
