import { _EXPRESSION_AWAIT } from "../../_internal/node-name/expressions-name";
import { Expression } from "../expression.base";

export class AwaitExpression extends Expression {
  constructor() {
    super(_EXPRESSION_AWAIT);
  }
}
