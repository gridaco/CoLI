import { JSXText } from "coli/lib/jsx/jsx-text";
import { StringfyLanguage } from "..";

export function coliJSXTextStringfy(c: JSXText, l: StringfyLanguage): string {
  return c.value;
}
