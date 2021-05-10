import { JSXElement } from "coli";
import { stringfy, StringfyLanguage } from "..";

export function coliJSXElementStringfy(
  c: JSXElement,
  l: StringfyLanguage
): string {
  let code = "";
  const { openingElement, closingElement, children } = c;
  code += `${stringfy(openingElement, { language: l })}`;
  if (children) {
    code += `${stringfy(children, { language: l })}`;
  }
  code += `${stringfy(closingElement, { language: l })}`;
  return code;
}
