import { ColiObject } from "../_abstract";
import type { SyntaxKind } from "../_internal";

export type CommentTriviaType =
  | SyntaxKind.SingleLineCommentTrivia
  | SyntaxKind.MultiLineCommentTrivia;
export class CommentTrivia extends ColiObject {
  readonly hasTrailingNewLine: boolean;
  readonly text: string;

  constructor(
    type: CommentTriviaType,
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
