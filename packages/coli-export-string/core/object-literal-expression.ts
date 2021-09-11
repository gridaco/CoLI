import { ObjectLiteralExpression } from "coli";
import { StringfyLanguage, stringfy } from "..";
import { indent } from "@coli.codes/export-string-core";

export function _strfy_object_literal_expression(
  c: ObjectLiteralExpression,
  l: StringfyLanguage
) {
  return `{
${indent.onEachLine(stringfy(c.properties, { language: l, joinWith: ",\n" }))}
}`;
}
