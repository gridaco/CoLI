import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { Literal } from "./literal";

export class TemplateLiteral extends Literal {
  constructor(readonly value: string) {
    super(SyntaxKind.NoSubstitutionTemplateLiteral, value);
  }
}
