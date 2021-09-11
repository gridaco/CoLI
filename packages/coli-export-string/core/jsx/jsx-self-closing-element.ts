import { JSXSelfClosingElement } from "coli";
import { StringfyLanguage } from "../..";
import { strfy_jsx_with_atrributes } from "./utils/jsx-with-attributes";

export function coliJSXSelfClosingElementStringfy(
  c: JSXSelfClosingElement,
  l: StringfyLanguage
): string {
  const { name, atrributes } = c;
  return strfy_jsx_with_atrributes({
    name: name,
    open_token: "<",
    close_token: "/>",
    attributes: atrributes,
  });
}
