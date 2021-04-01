import { Identifier, Literal } from "coli/lib/ast";
import { ImportSpecifier } from "coli/lib/declarations/import";
import { VariableDeclaration } from "coli/lib/declarations/variable";
import { PropertyAccessExpression } from "coli/lib/expressions/property-access-exporession";
import { TaggedTemplateExpression } from "coli/lib/expressions/tagged-template-expression";
import { stringfy, StringfyLanguage } from "..";
import { converValue } from "../utils/convert-value";
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
