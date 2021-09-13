import { Block } from "coli";
import { stringfy, StringfyLanguage } from "..";
import {
  eo,
  indent,
  KeywordAndTokenStatic,
} from "@coli.codes/export-string-core";
export function strfy_block(c: Block, l: StringfyLanguage): string {
  const { body } = c;
  let code = `${KeywordAndTokenStatic.OpenBraceToken}${
    KeywordAndTokenStatic.BreakLineToken
  }${indent.onEachLine(
    stringfy(body, {
      language: l,
      joinWith: KeywordAndTokenStatic.BreakLineToken,
    })
  )}${KeywordAndTokenStatic.BreakLineToken}${
    KeywordAndTokenStatic.CloseBraceToken
  }`;
  code += eo.FILALIZED_END_OF_BLOCK_TOKEN_VALUE;
  return code;
}
