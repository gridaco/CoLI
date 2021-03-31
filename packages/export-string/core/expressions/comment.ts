import { CommentExpression } from "coli/lib/expressions/comment";
import { StringfyLanguage } from "../..";

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
  const {
    single,
    multi: { leading, traling, line },
  } = getCommentToken(l);
  let code = "";

  if (style === "single-line") {
    code += content
      .split("\n")
      .map((i) => `${single} ${i}`)
      .join("\n");
  }

  if (style === "multi-line") {
    code += `${leading}\n`;
    code += content
      .split("\n")
      .map((i) => `${line} ${i}`)
      .join("\n");
    code += `\n${traling}`;
  }

  return code;
}
