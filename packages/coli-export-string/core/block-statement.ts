import { Block } from "coli";
import { stringfy, StringfyLanguage } from "..";
import { FILALIZED_END_OF_BLOCK_TOKEN_VALUE } from "../eo/end-of-block";

export function coliBlockStringfy(c: Block, l: StringfyLanguage): string {
  const { body } = c;
  let code = `{\n${stringfy(body, { language: l, arrayDivison: "\n" })}\n}`;
  code += FILALIZED_END_OF_BLOCK_TOKEN_VALUE;
  return code;
}
