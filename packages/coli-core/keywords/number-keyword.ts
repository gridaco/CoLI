import { SyntaxKind } from "../ast/syntax-kind";
import { _TypeKeyword } from "./_keyword";

export class NumberKeyword extends _TypeKeyword {
  readonly kind: SyntaxKind.NumberKeyword;
}
