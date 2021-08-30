import { ObjectLiteralExpression } from "coli";
import { StringfyLanguage, stringfy } from "..";

export function _strfy_object_literal_expression(
  c: ObjectLiteralExpression,
  l: StringfyLanguage
) {
  return `{
${stringfy(c.properties, { language: l })}
}`;
}
