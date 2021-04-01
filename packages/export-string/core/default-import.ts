import { Identifier, Literal } from "coli/lib/ast";
import {
  ImportDefaultSpecifier,
  ImportSpecifier,
} from "coli/lib/declarations/import";
import { VariableDeclaration } from "coli/lib/declarations/variable";
import { PropertyAccessExpression } from "coli/lib/expressions/property-access-exporession";
import { TaggedTemplateExpression } from "coli/lib/expressions/tagged-template-expression";
import { stringfy, StringfyLanguage } from "..";
import { converValue } from "../utils/convert-value";

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
