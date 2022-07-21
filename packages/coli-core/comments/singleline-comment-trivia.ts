import { SyntaxKind } from "../_internal";
import { CommentTrivia } from "./_base";

export class SingleLineCommentTrivia extends CommentTrivia {
  constructor({
    hasTrailingNewLine = false,
    text,
  }: {
    hasTrailingNewLine?: boolean;
    text?: string;
  }) {
    super(SyntaxKind.SingleLineCommentTrivia, hasTrailingNewLine, text);
  }
}
