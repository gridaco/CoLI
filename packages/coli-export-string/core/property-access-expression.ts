import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { PropertyAccessExpression } from "coli";
import { stringfy, StringfyLanguage } from "..";

export function coliPropertyAccessStringfy(
  c: PropertyAccessExpression,
  l: StringfyLanguage
): string {
  const { expression, name } = c;
  let code = `${stringfy(expression, { language: l })}`;

  code += `${KeywordAndTokenStatic.DotToken}${name}`;

  return code;
}
