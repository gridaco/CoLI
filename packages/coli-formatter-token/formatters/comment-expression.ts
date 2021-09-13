import { CommentExpression } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";

export function astfmt_comment_expression(c: CommentExpression) {
  const { style, content } = c;
  const splitContent = content.split("\n");

  /// "a\nb\nc\nd" ->
  /// // a
  /// // b
  /// // c
  /// // d
  if (style === "single-line") {
    return inject.insertBetween(
      splitContent.map((i) => [f("//"), i]),
      "\n"
    );
  }

  if (style === "multi-line") {
    const docstring_starter_tokens = ["/**", " *", "*/"];
    return [
      [docstring_starter_tokens[0], "\n"],
      inject.insertBetween(
        splitContent.map((i) => [f(docstring_starter_tokens[1] as " *"), i]),
        "\n"
      ),
      ["\n", docstring_starter_tokens[2] as "*/", "\n"],
    ];
  }
}
