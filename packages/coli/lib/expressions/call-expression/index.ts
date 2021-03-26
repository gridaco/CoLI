import { _EXPRESSION_CALL } from "../../_internal/constants/expressions-name";
import { Expression } from "../expression.base";

export class CallExpression extends Expression {
  constructor() {
    super(_EXPRESSION_CALL);
  }
}
