import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { JSXExpression } from "coli";
import { stringfy, StringfyLanguage } from "../..";

export function strfy_jsx_expression(
  c: JSXExpression,
  l: StringfyLanguage
): string {
  const { expression } = c;
  let code = `${KeywordAndTokenStatic.OpenBraceToken}${stringfy(expression, {
    language: l,
  })}${KeywordAndTokenStatic.CloseBraceToken}`;
  return code;
}
