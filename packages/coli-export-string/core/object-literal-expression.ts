import { ObjectLiteralExpression } from "coli";
import { StringfyLanguage, stringfy } from "..";
import { indent, KeywordAndTokenStatic } from "@coli.codes/export-string-core";

export function strfy_object_literal_expression(
  c: ObjectLiteralExpression,
  l: StringfyLanguage
) {
  return `${KeywordAndTokenStatic.OpenBraceToken}
${indent.onEachLine(
  stringfy(c.properties, {
    language: l,
    joinWith: `${KeywordAndTokenStatic.CommaToken}${KeywordAndTokenStatic.BreakLineToken}`,
  })
)}
${KeywordAndTokenStatic.CloseBraceToken}`;
}
