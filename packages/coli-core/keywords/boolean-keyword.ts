import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { _TypeKeyword } from "./_keyword";

export class BooleanKeyword extends _TypeKeyword {
  readonly kind: SyntaxKind.BooleanKeyword;
  constructor() {
    super(SyntaxKind.BooleanKeyword);
  }
}