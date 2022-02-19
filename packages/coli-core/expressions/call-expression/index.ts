import type { ColiObject } from "../..";
import { _EXPRESSION_CALL } from "../../_internal/node-name/expressions-name";
import { Expression } from "../expression.base";

export class CallExpression extends Expression {
  readonly arguments?: Array<ColiObject>;
  constructor(
    readonly expression: Expression,
    _arguments?: ColiObject | Array<ColiObject>
  ) {
    super(_EXPRESSION_CALL);
    this.arguments = Array.isArray(_arguments) ? _arguments : [_arguments];
  }
}
