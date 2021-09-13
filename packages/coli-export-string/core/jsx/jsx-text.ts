import { JSXText } from "coli";
import { StringfyLanguage } from "../..";
import { escapeJsxString } from "@coli.codes/escape-string";

export function strfy_jsx_text(c: JSXText, l: StringfyLanguage): string {
  const _escaped = escapeJsxString(c.value);
  return _escaped;
}
