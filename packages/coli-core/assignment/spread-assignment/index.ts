import { Identifier } from "../../ast";
import { ObjectLiteralExpression } from "../../expressions";
import { _ASSIGNMENT_SPREAD } from "../../_internal";
import { Assignment } from "../assignment.base";

/**
 * example
 * ```ts
 * const obj = {
 *    ...other_obj,  // << --- this is spead assignment
 *    f1: 1,
 *    f2: 2
 * }
 * ```
 */
export class SpreadAssignment extends Assignment {
  expression: Identifier | ObjectLiteralExpression; // + more
  constructor() {
    super(_ASSIGNMENT_SPREAD);
  }
}
