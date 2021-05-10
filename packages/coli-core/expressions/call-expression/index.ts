import { Identifier } from "../../ast/identifier";
import { _EXPRESSION_CALL } from "../../_internal/node-name/expressions-name";
import { Expression } from "../expression.base";

export class CallExpression extends Expression {
  constructor(callee: Identifier) {
    super(_EXPRESSION_CALL);
  }
}
