import { JSXSelfClosingElement } from "coli";
import { StringfyLanguage } from "../..";
import { strfy_jsx_with_attributes } from "./utils/jsx-with-attributes";

export function coliJSXSelfClosingElementStringfy(
  c: JSXSelfClosingElement,
  l: StringfyLanguage
): string {
  const { name, attributes } = c;
  return strfy_jsx_with_attributes({
    name: name,
    open_token: "<",
    close_token: "/>",
    attributes: attributes,
  });
}
