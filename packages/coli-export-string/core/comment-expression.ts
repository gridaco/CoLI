import { CommentExpression } from "coli";
import { StringfyLanguage, stringfy_tokenformatted } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_comment_expression(
  c: CommentExpression,
  l: StringfyLanguage
): string {
  const { style, content } = c;

  const ast = formatters.astfmt_comment_expression(c);
  return stringfy_tokenformatted(ast);

  // const splitContent = content.split(KeywordAndTokenStatic.BreakLineToken);
  // const { MultiCommentKeyword, SingleCommentKeyword } = languageInterpreter(l);

  // if (style === "single-line") {
  //   return splitContent
  //     .map((i) => `${SingleCommentKeyword} ${i}`)
  //     .join(KeywordAndTokenStatic.BreakLineToken);
  // }

  // if (style === "multi-line") {
  //   let code = "";
  //   const [leading, line, traling] = MultiCommentKeyword.toString().split(
  //     KeywordAndTokenStatic.BreakSpaceToken
  //   );
  //   code += `${leading}${KeywordAndTokenStatic.BreakLineToken}`;
  //   code += splitContent
  //     .map((i) => `${line}${KeywordAndTokenStatic.BreakSpaceToken}${i}`)
  //     .join(KeywordAndTokenStatic.BreakLineToken);
  //   code += `${KeywordAndTokenStatic.BreakLineToken}${traling}${KeywordAndTokenStatic.BreakLineToken}`;
  //   return code;
  // }
}
