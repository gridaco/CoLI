import { Literal, TemplateLiteral } from "coli";
import { StringfyLanguage } from "..";
import { convertValue } from "../utils/convert-value";

export function coliLiteralStringfy(c: Literal, l: StringfyLanguage): string {
  const { value } = c;
  const isTemplateLiteral = c instanceof TemplateLiteral;
  let code = "";
  if (!isTemplateLiteral) {
    code += `${convertValue(value, l)}`;
  } else if (isTemplateLiteral) {
    code += `\`${value}\``;
  }
  return code;
}
