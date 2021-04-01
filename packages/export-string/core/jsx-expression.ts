import { Block } from "coli/lib";
import { JSXExpression } from "coli/lib/jsx";
import { stringfy, StringfyLanguage } from "..";

export function coliJSXExpressionStringfy(
  c: JSXExpression,
  l: StringfyLanguage
): string {
  const { expression } = c;
  let code = `{${stringfy(expression, { language: l })}}`;
  return code;
}
