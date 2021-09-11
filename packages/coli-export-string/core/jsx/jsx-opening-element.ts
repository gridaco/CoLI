import { JSXOpeningElement } from "coli";
import { stringfy, StringfyLanguage } from "../..";

export function coliJSXOpeningElementStringfy(
  c: JSXOpeningElement,
  l: StringfyLanguage
): string {
  const { name, atrributes } = c;
  let code = "";
  code += `<${stringfy(name, { language: l })}>`;
  return code;
}
