import { JsxBaseElement } from "@coli.codes/jsx-core/elements";
import { Return } from "coli";
import { stringfy, StringfyLanguage } from "..";
import { indent } from "@coli.codes/export-string-core";

export function coliReturnStringfy(c: Return, l: StringfyLanguage): string {
  const { argument } = c;
  if (argument instanceof JsxBaseElement) {
    return `return (
    ${indent.onEachLine(stringfy(argument, { language: l }))}
  )`;
  }
  return `return ${stringfy(argument, { language: l })}`;
}
