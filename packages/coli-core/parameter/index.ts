import { Identifier } from "../ast";
import { DotDotDotToken } from "../dotdotdot-token";
import { QuestionToken } from "../question-token";
import { TypeLike } from "../types";
import { ColiObject } from "../_abstract";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";

/**
 *
 * based on below example, `p1`, `p2`, `p3` is a parameter here.
 * ```ts
 * (p1, p2, ...p3) => void
 * ```
 */
export class Parameter extends ColiObject {
  readonly kind = SyntaxKind.Parameter;
  readonly name: Identifier;
  type?: TypeLike;
  dotDotDotToken?: DotDotDotToken;
  questionToken?: QuestionToken;
  constructor(parameters) {
    super(SyntaxKind.Parameter);
  }
}
