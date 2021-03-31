import { _EXPRESSION_TAGGED_TEMPLATE } from "../../_internal/node-name/expressions-name";
import { Expression } from "../expression.base";

export class TaggedTemplateExpression extends Expression {
  constructor() {
    super(_EXPRESSION_TAGGED_TEMPLATE);
  }
}
