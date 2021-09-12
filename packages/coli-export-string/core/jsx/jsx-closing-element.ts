import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { JSXClosingElement } from "coli";
import { stringfy, StringfyLanguage } from "../..";

export function coliJSXClosingElementStringfy(
  c: JSXClosingElement,
  l: StringfyLanguage
): string {
  const { name } = c;
  return `${KeywordAndTokenStatic.LessThanSlashToken}${stringfy(name, {
    language: l,
  })}${KeywordAndTokenStatic.GreaterThanToken}`;
}
