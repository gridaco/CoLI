import { JSXClosingElement } from "coli/lib/jsx/jsx-closing-element";
import { stringfy, StringfyLanguage } from "..";

export function coliJSXClosingElementStringfy(
  c: JSXClosingElement,
  l: StringfyLanguage
): string {
  const { name } = c;
  let code = "";
  code += `</${stringfy(name, { language: l })}>`;
  return code;
}
