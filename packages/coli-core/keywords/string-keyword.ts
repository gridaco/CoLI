import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { _TypeKeyword } from "./_keyword";

export class StringKeyword extends _TypeKeyword {
  readonly kind: SyntaxKind.StringKeyword;
  constructor() {
    super(SyntaxKind.StringKeyword);
  }
}
