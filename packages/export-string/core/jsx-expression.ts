import { JSXExpression } from "coli/lib/jsx";
import { stringfy } from "..";

export function STRFY_JsxExpression(c: JSXExpression): string {
  return `{${stringfy(c.expression, {
    language: "jsx",
  })}}`;
}
