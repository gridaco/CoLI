import { _EXPRESSION_JSX } from "../../_internal/constants/expressions-name";
import { Expression } from "../../expressions/expression.base";

export class JSXExpression extends Expression {
  constructor() {
    super(_EXPRESSION_JSX);
  }
}
