import { Literal } from "./literal";

export class StringLiteral extends Literal {
  constructor(readonly value: string) {
    super(value);
  }
}
