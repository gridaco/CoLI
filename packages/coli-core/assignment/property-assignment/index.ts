import { Identifier } from "../../ast";
import { Literal, StringLiteral } from "../../literal";
import { ColiObject } from "../../_abstract";
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
  readonly kind = SyntaxKind.PropertyAssignment;
  initializer: Identifier | Literal | ColiObject; // TODO: add other types support e.g. arrow function.

  constructor(p: {
    name: Identifier | StringLiteral;
    initializer: Identifier | Literal;
  }) {
    super(_ASSIGNMENT_PROPERTY);
    this.name = p.name;
    this.initializer = p.initializer;
  }
}
