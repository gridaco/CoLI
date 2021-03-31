import { Identifier } from "../../ast";
import { ColiObject } from "../../_abstract";
import { _EXPRESSION_PROPERTY_ACCESS } from "../../_internal/node-name";
import { Expression } from "../expression.base";

export class PropertyAccessExpression extends Expression {
  readonly expression: ColiObject;
  readonly name: string | Identifier;

  constructor(expression: ColiObject, name: string | Identifier) {
    super(_EXPRESSION_PROPERTY_ACCESS);
    this.expression = expression;
    this.name = name;
  }
}
