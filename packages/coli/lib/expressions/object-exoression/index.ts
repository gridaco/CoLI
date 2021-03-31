import { _EXPRESSION_OBJECT } from "../../_internal/node-name";
import { Expression } from "../expression.base";

export class ObjectExpression extends Expression {
  readonly properties: [];
  constructor() {
    super(_EXPRESSION_OBJECT);
  }
}
