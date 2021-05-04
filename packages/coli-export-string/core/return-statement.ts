import { Return } from "coli/lib";
import { stringfy, StringfyLanguage } from "..";

export function coliReturnStringfy(c: Return, l: StringfyLanguage): string {
  const { argument } = c;
  let code = `return (\n${stringfy(argument, { language: l })}\n)`;
  return code;
}
