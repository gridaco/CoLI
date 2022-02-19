import { PropertyAssignment } from "../../assignment";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { _EXPRESSION_LITERAL_OBJECT } from "../../_internal/node-name";
import { Expression } from "../expression.base";
import { Identifier, Literal, StringLiteral } from "../..";

/**
 * based on below example, `{}` is a object literal.
 * ```ts
 * const obj = {}
 * ```
 */
export class ObjectLiteralExpression extends Expression {
  kind = SyntaxKind.ObjectLiteralExpression;
  properties?: PropertyAssignment[] = [];
  constructor(p: {
    properties?: PropertyAssignment[] | { [key: string]: Literal };
  }) {
    super(_EXPRESSION_LITERAL_OBJECT);

    if (p.properties) {
      if (Array.isArray(p.properties)) {
        this.properties = p.properties;
      } else {
        for (const key in p.properties) {
          const v = p.properties[key];
          if (v !== undefined) {
            this.properties.push(
              new PropertyAssignment({
                name: /[a-zA-Z_$][0-9a-zA-Z_$]*/.test(key) // a short hand validator for valid variable name
                  ? new Identifier(key)
                  : new StringLiteral(key),
                initializer: Literal.from(v),
              })
            );
          }
        }
      }
    }
  }
}
