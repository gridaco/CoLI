import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { JSXAttribute } from "coli";
import { stringfy, StringfyLanguage } from "../..";

export function coliJSXAttributeStringfy(
  atrribute: JSXAttribute,
  l: StringfyLanguage
) {
  const { name, value } = atrribute;
  const atrributeName = stringfy(name, { language: l });
  const atrributeValue = stringfy(value, { language: l });
  return `${atrributeName}${KeywordAndTokenStatic.EqualsToken}${atrributeValue}`;
}
