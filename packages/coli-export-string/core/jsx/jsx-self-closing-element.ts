import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { JSXSelfClosingElement } from "coli";
import { StringfyLanguage } from "../..";
import { strfy_jsx_with_attributes } from "./utils/jsx-with-attributes";

export function strfy_jsx_self_closing_element(
  c: JSXSelfClosingElement,
  l: StringfyLanguage
): string {
  const { name, attributes } = c;
  return strfy_jsx_with_attributes({
    name: name,
    open_token: KeywordAndTokenStatic.LessThanToken,
    close_token: KeywordAndTokenStatic.SlashGreaterThanToken,
    attributes: attributes,
  });
}
