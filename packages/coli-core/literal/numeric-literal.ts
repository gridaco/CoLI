import { SyntaxKind } from "../_internal";
import { Literal } from "./literal";

export class NumericLiteral extends Literal {
  readonly kind = SyntaxKind.NumericLiteral;
  constructor(readonly value: number) {
    super(SyntaxKind.NumericLiteral, value);
  }
}
