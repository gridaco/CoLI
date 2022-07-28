import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { _TypeKeyword } from "./_keyword";

export class NumberKeyword extends _TypeKeyword {
  constructor() {
    super(SyntaxKind.NumberKeyword);
  }
}
