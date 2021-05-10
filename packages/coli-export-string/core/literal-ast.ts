import { ast } from "coli";
import { StringfyLanguage } from "..";
import { convertValue } from "../utils/convert-value";

export function coliLiteralStringfy(
  c: ast.Literal,
  l: StringfyLanguage
): string {
  const { value } = c;
  const isTemplateLiteral = c instanceof ast.TemplateLiteral;
  let code = "";
  if (!isTemplateLiteral) {
    code += `${convertValue(value, l)}`;
  } else if (isTemplateLiteral) {
    code += `\`${value}\``;
  }
  return code;
}
