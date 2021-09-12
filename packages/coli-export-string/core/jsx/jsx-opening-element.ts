import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { JSXOpeningElement } from "coli";
import { StringfyLanguage } from "../..";
import { strfy_jsx_with_attributes } from "./utils/jsx-with-attributes";

export function coliJSXOpeningElementStringfy(
  c: JSXOpeningElement,
  l: StringfyLanguage
): string {
  const { name, attributes } = c;
  return strfy_jsx_with_attributes({
    name: name,
    open_token: KeywordAndTokenStatic.LessThanToken,
    close_token: KeywordAndTokenStatic.GreaterThanToken,
    attributes: attributes,
  });
}
