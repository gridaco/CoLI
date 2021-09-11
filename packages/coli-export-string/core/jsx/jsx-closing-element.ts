import { JSXClosingElement } from "coli";
import { stringfy, StringfyLanguage } from "../..";

export function coliJSXClosingElementStringfy(
  c: JSXClosingElement,
  l: StringfyLanguage
): string {
  const { name } = c;
  let code = "";
  code += `</${stringfy(name, { language: l })}>`;
  return code;
}
