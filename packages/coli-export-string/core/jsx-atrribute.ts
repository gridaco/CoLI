import { JSXAtrribute } from "coli";
import { stringfy, StringfyLanguage } from "..";

export function coliJSXAtrributeStringfy(
  atrribute: JSXAtrribute,
  l: StringfyLanguage
) {
  const { name, value } = atrribute;
  const atrributeName = stringfy(name, { language: l });
  const atrributeValue = stringfy(value, { language: l });
  return `${atrributeName}=${atrributeValue}`;
}
