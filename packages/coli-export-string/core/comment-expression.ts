import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { CommentExpression } from "coli";
import { StringfyLanguage } from "..";
import { languageInterpreter } from "../interperters/main-interpreter";

export function coliCommentStringfy(
  c: CommentExpression,
  l: StringfyLanguage
): string {
  const { style, content } = c;
  const splitContent = content.split(KeywordAndTokenStatic.BreakLineToken);
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
