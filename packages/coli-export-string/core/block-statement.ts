import { Block } from "coli/lib";
import { stringfy, StringfyLanguage } from "..";

export function coliBlockStringfy(c: Block, l: StringfyLanguage): string {
  const { body } = c;
  let code = `{\n${stringfy(body, { language: l, arrayDivison: "\n" })}\n}`;
  return code;
}
