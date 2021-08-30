import { PropertyAssignment } from "../../assignment";
import { SyntaxKind } from "../../_internal";
import { _EXPRESSION_OBJECT } from "../../_internal/node-name";
import { Expression } from "../expression.base";

/**
 * based on below example, `{}` is a object literal.
 * ```ts
 * const obj = {}
 * ```
 */
export class ObjectExpression extends Expression {
  kind = SyntaxKind.ObjectLiteralExpression;
  properties?: PropertyAssignment[] = [];
  constructor() {
    super(_EXPRESSION_OBJECT);
  }
}
