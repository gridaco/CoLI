import { Block } from "coli";
import { stringfy, StringfyLanguage, stringfy_tokenformatted } from "..";
import { formatters } from "@coli.codes/ast-formatter";
export function strfy_block(c: Block, l: StringfyLanguage): string {
  const ast = formatters.astfmt_block(c);
  return stringfy_tokenformatted(ast);

  // const { body } = c;
  // let code = `${KeywordAndTokenStatic.OpenBraceToken}${
  //   KeywordAndTokenStatic.BreakLineToken
  // }${indent.onEachLine(
  //   stringfy(body, {
  //     language: l,
  //     joinWith: KeywordAndTokenStatic.BreakLineToken,
  //   })
  // )}${KeywordAndTokenStatic.BreakLineToken}${
  //   KeywordAndTokenStatic.CloseBraceToken
  // }`;
  // code += eo.FILALIZED_END_OF_BLOCK_TOKEN_VALUE;
  // return code;
}
