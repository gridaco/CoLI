import { SyntaxKind } from "../ast/syntax-kind";
import { ColiObject, ColiTypeKeyword } from "../_abstract";

export abstract class _TypeKeyword extends ColiObject {
  constructor(readonly kind: ColiTypeKeyword) {
    super(kind);
  }
}
