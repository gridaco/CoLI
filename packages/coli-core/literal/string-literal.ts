import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { Literal } from "./literal";

export class StringLiteral extends Literal {
  readonly kind = SyntaxKind.StringLiteral;
  constructor(readonly value: string) {
    super(SyntaxKind.StringLiteral, value);
  }
}
