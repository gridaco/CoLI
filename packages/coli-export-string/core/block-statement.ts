import { Block } from "coli";
import { stringfy, StringfyLanguage } from "..";
import { eo, indent } from "@coli.codes/export-string-core";
export function coliBlockStringfy(c: Block, l: StringfyLanguage): string {
  const { body } = c;
  let code = `{\n${indent.onEachLine(
    stringfy(body, { language: l, joinWith: "\n" })
  )}\n}`;
  code += eo.FILALIZED_END_OF_BLOCK_TOKEN_VALUE;
  return code;
}
