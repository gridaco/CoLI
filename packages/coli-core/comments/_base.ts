import { ColiObject } from "../_abstract";
import { SyntaxKind } from "../_internal";

export class CommentTrivia extends ColiObject {
  readonly hasTrailingNewLine: boolean;
  readonly text: string;

  constructor(
    type:
      | SyntaxKind.SingleLineCommentTrivia
      | SyntaxKind.MultiLineCommentTrivia,
    hasTrailingNewLine: boolean = false,
    text: string
  ) {
    super(type);
    this.hasTrailingNewLine = hasTrailingNewLine;
    this.text = text;
  }

  withComments() {
    throw "CoLi:: Invalid member call: adding comments to CommentTrivia is not supported.";
    return this;
  }
}
