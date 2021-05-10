import { JSXExpression } from "coli";
import { stringfy, StringfyLanguage } from "..";

export function coliJSXExpressionStringfy(
  c: JSXExpression,
  l: StringfyLanguage
): string {
  const { expression } = c;
  let code = `{${stringfy(expression, { language: l })}}`;
  return code;
}
