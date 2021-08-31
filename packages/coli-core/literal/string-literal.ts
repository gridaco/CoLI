import { SyntaxKind } from "../_internal";
import { Literal } from "./literal";

export class StringLiteral extends Literal {
  readonly kind = SyntaxKind.StringLiteral;
  constructor(readonly value: string) {
    super(SyntaxKind.StringLiteral, value);
  }
}
