import { stringfy_tokenformatted, StringfyOptions } from "..";
import { formatters } from "@coli.codes/ast-formatter";
import type { Identifier } from "@coli.codes/core";

export function strfy_identifier(c: Identifier, l: StringfyOptions): string {
  const ast = formatters.astfmt_identifier(c);
  return stringfy_tokenformatted(ast, l);

  // let code = `${name}`;

  // if (typeAnnotation) {
  //   if (isJson(typeAnnotation.keyword)) {
  //     // If type is defined as object, delete "
  //     code += `${KeywordAndTokenStatic.BreakSpaceToken}${
  //       KeywordAndTokenStatic.ColonToken
  //     }${KeywordAndTokenStatic.BreakSpaceToken}${typeAnnotation.keyword.replace(
  //       /"/gi,
  //       ""
  //     )}`;
  //   } else {
  //     code += `${KeywordAndTokenStatic.BreakSpaceToken}${KeywordAndTokenStatic.ColonToken}${KeywordAndTokenStatic.BreakSpaceToken}${typeAnnotation.keyword}`;
  //   }
  // }

  // return code;
}
