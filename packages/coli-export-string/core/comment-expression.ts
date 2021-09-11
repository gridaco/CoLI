import { CommentExpression } from "coli";
import { StringfyLanguage } from "..";
import { languageInterpreter } from "../interperters/main-interpreter";

export function coliCommentStringfy(
  c: CommentExpression,
  l: StringfyLanguage
): string {
  const { style, content } = c;
  const splitContent = content.split("\n");
  const { MultiCommentKeyword, SingleCommentKeyword } = languageInterpreter(l);

  let code = "";

  if (style === "single-line") {
    code += splitContent.map((i) => `${SingleCommentKeyword} ${i}`).join("\n");
  }

  if (style === "multi-line") {
    const [leading, line, traling] = MultiCommentKeyword.toString().split(" ");
    code += `${leading}\n`;
    code += splitContent.map((i) => `${line} ${i}`).join("\n");
    code += `\n${traling}\n`;
  }

  return code;
}
