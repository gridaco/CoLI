import { Identifier, Literal } from "coli/lib/ast";
import { VariableDeclaration } from "coli/lib/declarations/variable";
import { PropertyAccessExpression } from "coli/lib/expressions/property-access-exporession";
import { TaggedTemplateExpression } from "coli/lib/expressions/tagged-template-expression";
import { stringfy, StringfyLanguage } from "../..";
import { converValue } from "../../utils/convert-value";

/**
 * @todo transpile lauganage
 * @todo value stringfy
 */
export function coliVariableStringfy(
  c: VariableDeclaration,
  l: StringfyLanguage
): string {
  const {
    kind,
    type: { keyword: type },
    id,
    initializer,
  } = c;
  let code = `${kind} ${stringfy(id, { language: l })}`;
  if (type) {
    code += ` : ${type}`;
  }
  if (initializer) {
    code += ` = ${stringfy(initializer, { language: l })}`;
  }
  return code;
}
