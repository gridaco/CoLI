import { Literal } from "./literal";

export class NumericLiteral extends Literal {
  constructor(value: number) {
    super(value);
  }
}
