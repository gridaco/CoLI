import { Identifier, Literal, StringLiteral } from "../../ast";
import { SyntaxKind, _ASSIGNMENT_PROPERTY } from "../../_internal";
import { Assignment } from "../assignment.base";

/**
 *
 * example.
 * ```ts
 * const props = {
 *  foo: 'bar', // <<--- this is property assignment
 * }
 * ```
 */
export class PropertyAssignment extends Assignment {
  readonly name: Identifier | StringLiteral;
  readonly kind: SyntaxKind.PropertyAssignment;
  initializer: Identifier | Literal; // TODO: add other types support e.g. arrow function.

  constructor() {
    super(_ASSIGNMENT_PROPERTY);
  }
}
