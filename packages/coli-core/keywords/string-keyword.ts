import { SyntaxKind } from "../ast/syntax-kind";
import { _TypeKeyword } from "./_keyword";

export class StringKeyword extends _TypeKeyword {
  readonly kind: SyntaxKind.StringKeyword;
  constructor() {
    super(SyntaxKind.StringKeyword);
  }
}
