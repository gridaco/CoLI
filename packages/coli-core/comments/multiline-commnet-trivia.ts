import { SyntaxKind } from "../_internal";
import { CommentTrivia } from "./_base";

export class MultilineCommentTrivia extends CommentTrivia {
  constructor({
    hasTrailingNewLine = false,
    text,
  }: {
    hasTrailingNewLine?: boolean;
    text?: string;
  }) {
    super(SyntaxKind.MultiLineCommentTrivia, hasTrailingNewLine, text);
  }
}
