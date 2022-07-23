import { FormatterTokenLike, FormattingToken } from "../tokens";

/**
 * accepts a (nested) array of string, adds token to each line (if item is '\n').
 * add token after the new line token. inject token after the '\n' item. - e.g. ["\n", "return"] => ["\n", "\t", "return"]
 *
 * @example
 *
 * ```
 * // add tabs (indent) to each line below to put it under a block - `{}`
 * // return (\n\t</div>\n)
 * tokens = ["return", " ", "\n", ["(", "\n", ["\t", "</div>"], ")"]]
 *
 * ["{", "\n", onEachLine(tokens, "\t"), "\n", "}"].join("");
 * // >> {\n\treturn (\n\t</div>\n\t)}
 * ```
 */
export function onEachLine(
  tokens: any[],
  token: FormatterTokenLike | FormattingToken
): any[] {
  // recursive function to add token to each line
  // example.
  // in: ["return", " ", "\n", ["(", "\n", ["\t", "</div>"], "\n",  ")"]]
  // out: ["return", " ", "\n", token, ["(", "\n", token, ["\t", "</div>"], "\n", token, ")"]]
  const addToken = (
    tokens: any[],
    token: FormatterTokenLike | FormattingToken
  ): any[] => {
    if (!tokens || !tokens.length) {
      return;
    }
    return tokens.reduce((acc, item) => {
      if (Array.isArray(item)) {
        acc.push(addToken(item, token));
      } else {
        acc.push(item);
        if (isnewline(item)) {
          // add after new line
          acc.push(token);
        }
      }
      return acc;
    }, []);
  };

  return addToken(tokens, token);
}

function isnewline(token: FormatterTokenLike | FormattingToken): boolean {
  switch (typeof token) {
    case "string":
      return token === "\n";
    case "object": {
      if (token instanceof FormattingToken) {
        return token.kind === "\n";
      }
    }
  }
  return false;
}
