import { JSXOpeningElement } from "coli";
import { stringfy, StringfyLanguage } from "../..";
import { get_jsx_attribute_join_with_by_attributes } from "./utils/jsx-attribute-splitter";
import { strfy_jsx_with_atrributes } from "./utils/jsx-with-attributes";

export function coliJSXOpeningElementStringfy(
  c: JSXOpeningElement,
  l: StringfyLanguage
): string {
  const { name, attributes } = c;
  return strfy_jsx_with_atrributes({
    name: name,
    open_token: "<",
    close_token: ">",
    attributes: attributes,
  });
}
