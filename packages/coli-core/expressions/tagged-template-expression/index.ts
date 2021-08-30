import { TemplateLiteral } from "../../literal";
import { _EXPRESSION_TAGGED_TEMPLATE } from "../../_internal/node-name/expressions-name";
import { Expression } from "../expression.base";

export class TaggedTemplateExpression extends Expression {
  readonly tag: Expression;

  /**
   * this exists on ts factroy - TODO inspect what this does.
   */
  // typeArguments: readonly TypeNode[] | undefined;

  readonly template: TemplateLiteral;
  constructor(
    tag: Expression,
    params: {
      template: TemplateLiteral;
    }
  ) {
    super(_EXPRESSION_TAGGED_TEMPLATE);
    this.tag = tag;
    this.template = params.template;
  }
}
