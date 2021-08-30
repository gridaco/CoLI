import { PropertyAssignment } from "../../assignment";
import { SyntaxKind } from "../../_internal";
import { _EXPRESSION_LITERAL_OBJECT } from "../../_internal/node-name";
import { Expression } from "../expression.base";

/**
 * based on below example, `{}` is a object literal.
 * ```ts
 * const obj = {}
 * ```
 */
export class ObjectLiteralExpression extends Expression {
  kind = SyntaxKind.ObjectLiteralExpression;
  properties?: PropertyAssignment[] = [];
  constructor(p: { properties?: PropertyAssignment[] }) {
    super(_EXPRESSION_LITERAL_OBJECT);
    this.properties = p.properties;
  }
}
