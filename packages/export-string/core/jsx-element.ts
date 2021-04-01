import { Literal } from "coli/lib/ast";
import { TemplateLiteral } from "coli/lib/ast/template-literal";
import { JSXElement } from "coli/lib/jsx";
import { stringfy, StringfyLanguage } from "..";
import { converValue } from "../utils/convert-value";

export function coliJSXElementStringfy(
  c: JSXElement,
  l: StringfyLanguage
): string {
  console.log(c);
  let code = "";
  const { openingElement, closingElement, children } = c;
  code += `${stringfy(openingElement, { language: l })}`;
  if (children) {
    code += `${stringfy(children, { language: l })}`;
  }
  code += `${stringfy(closingElement, { language: l })}`;
  return code;
}
