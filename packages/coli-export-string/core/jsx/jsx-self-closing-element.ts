import { JSXSelfClosingElement } from "coli";
import { stringfy, StringfyLanguage } from "../..";

export function coliJSXSelfClosingElementStringfy(
  c: JSXSelfClosingElement,
  l: StringfyLanguage
): string {
  const { name, atrributes } = c;

  let code = "";
  code += `<${stringfy(name, { language: l })} ${stringfy(atrributes, {
    language: l,
  })}/>`;
  return code;
}
