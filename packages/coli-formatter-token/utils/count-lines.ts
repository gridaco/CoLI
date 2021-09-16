import { FormatterTokenLike } from "..";

/**
 * this counts the \n token inside a formatting token or raw string, returns the approximate lines of the ast.
 * this is not totally accurate. += 1
 * @param tokens
 * @returns
 */
export function countLines(tokens: FormatterTokenLike): number {
  if (Array.isArray(tokens)) {
    return tokens.reduce((count, token) => count + countLines(token), 0);
  }
  if (tokens === "\n") {
    return 1;
  } else if (typeof tokens === "string") {
    if (tokens.includes("\n")) {
      return tokens.split("\n").length;
    } else {
      return 0;
    }
  }
  return 0;
}
