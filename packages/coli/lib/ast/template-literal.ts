import { Literal } from "./literal";

export class TemplateLiteral extends Literal {
  constructor(readonly value: string) {
    super(value);
  }
}
