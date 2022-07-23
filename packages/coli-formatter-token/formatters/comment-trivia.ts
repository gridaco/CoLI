import { CommentTrivia } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";

const docstring_starter_tokens = ["/**", " * ", " */"] as const;
export function astfmt_comment_trivia(c: CommentTrivia) {
  const { __type, text } = c;

  const lines = text.split("\n");

  switch (__type) {
    case SyntaxKind.MultiLineCommentTrivia: {
      return [
        [docstring_starter_tokens[0], "\n"],
        inject.insertBetween(
          lines.map((i) => [f(docstring_starter_tokens[1]), i]),
          "\n"
        ),
        ["\n", docstring_starter_tokens[2]],
      ];
    }
    case SyntaxKind.SingleLineCommentTrivia: {
      /// "a\nb\nc\nd" ->
      /// // a
      /// // b
      /// // c
      /// // d
      return inject.insertBetween(
        lines.map((i) => [f("//"), f(" "), i]),
        "\n"
      );
    }
  }

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
