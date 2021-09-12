import { CommentExpression } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { indent } from "..";

export function coliCommentStringfy(c: CommentExpression) {
  const { style, content } = c;
  const splitContent = content.split("\n");
  const { MultiCommentKeyword, SingleCommentKeyword } = languageInterpreter(l);

  if (style === "single-line") {
    return splitContent
      .map((i) => `${SingleCommentKeyword} ${i}`)
      .join(KeywordAndTokenStatic.BreakLineToken);
  }

  if (style === "multi-line") {
    let code = "";
    const [leading, line, traling] = MultiCommentKeyword.toString().split(
      KeywordAndTokenStatic.BreakSpaceToken
    );
    code += `${leading}${KeywordAndTokenStatic.BreakLineToken}`;
    code += splitContent
      .map((i) => `${line}${KeywordAndTokenStatic.BreakSpaceToken}${i}`)
      .join(KeywordAndTokenStatic.BreakLineToken);
    code += `${KeywordAndTokenStatic.BreakLineToken}${traling}${KeywordAndTokenStatic.BreakLineToken}`;
    return code;
  }
}
