import { JSXText } from "coli";
import { StringfyLanguage } from "..";

export function coliJSXTextStringfy(c: JSXText, l: StringfyLanguage): string {
  return c.value;
}
