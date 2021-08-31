import { SyntaxKind } from "../_internal";
import { Literal } from "./literal";

export class TemplateLiteral extends Literal {
  constructor(readonly value: string) {
    super(SyntaxKind.NoSubstitutionTemplateLiteral, value);
  }
}
