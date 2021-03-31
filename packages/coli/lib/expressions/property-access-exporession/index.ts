import { Identifier } from "../../ast";
import { ColiObject } from "../../_abstract";
import { _EXPRESSION_PROPERTY_ACCESS } from "../../_internal/node-name";
import { Expression } from "../expression.base";

/**
 * expression first accessor relative to behind accessor
 * name final accessor regarding to this expression's point of view.
 * e.g. styled.div - { expression: styled, name: div }
 * e.g. names.josh.first
 * ```
 * {
 *   expression: {
 *      expression: names
 *      name: josj
 *   },
 *   name: first
 * }
 * ```
 */
export class PropertyAccessExpression extends Expression {
  readonly expression: ColiObject;
  readonly name: string | Identifier;

  constructor(expression: ColiObject, name: string | Identifier) {
    super(_EXPRESSION_PROPERTY_ACCESS);
    this.expression = expression;
    this.name = name;
  }
}
