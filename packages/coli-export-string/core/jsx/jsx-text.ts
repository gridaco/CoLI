import { JSXText } from "coli";
import { StringfyOptions } from "../..";
import { escapeJsxString } from "@coli.codes/escape-string";

export function strfy_jsx_text(c: JSXText, l: StringfyOptions): string {
  const _escaped = escapeJsxString(c.value);
  return _escaped;
}
