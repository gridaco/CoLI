import { Literal } from "../../ast";

export class JSXText extends Literal {
  constructor(readonly value) {
    super(value);
  }
}
