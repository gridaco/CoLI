import { CommentExpression } from "coli/lib/expressions/comment";
import { StringfyLanguage } from "..";
import { languageInterpreter } from "../interperters/main-interpreter";

interface CommmentToken {
  single?: string;
  multi: {
    leading: string;
    traling: string;
    line?: string;
  };
}

function getCommentToken(l: StringfyLanguage): CommmentToken {
  switch (l) {
    case "typescript":
    case "tsx":
    case "javascript":
    case "jsx":
    case "dart":
      return {
        single: "//",
        multi: {
          leading: "/**",
          line: "*",
          traling: "**/",
        },
      };
    case "python":
      return {
        single: "#",
        multi: {
          leading: "'''",
          traling: "'''",
        },
      };
    case "html":
      return {
        multi: {
          leading: "<!--",
          traling: "-->",
        },
      };
  }
}

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
    code += `\n${traling}`;
  }

  return code;
}
