import { SyntaxKind } from "../ast/syntax-kind";
import { _TypeKeyword } from "./_keyword";

export class BooleanKeyword extends _TypeKeyword {
  readonly kind: SyntaxKind.BooleanKeyword;
}
