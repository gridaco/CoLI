import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { JSXOpeningElement } from "coli";
import { strfy_jsx_with_attributes } from "./utils/jsx-with-attributes";

export function astfmt_jsx_opening_element(c: JSXOpeningElement) {
  const { name, attributes } = c;
  return strfy_jsx_with_attributes({
    name: name,
    open_token: KeywordAndTokenStatic.LessThanToken,
    close_token: KeywordAndTokenStatic.GreaterThanToken,
    attributes: attributes,
  });
}
