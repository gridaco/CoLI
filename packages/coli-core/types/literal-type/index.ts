import { Literal } from "../../literal";
import { _TYPE_LITERAL } from "../../_internal";
import { _BaseType } from "../type.base";

/**
 *
 * What is LiteralType? - based on below example, "a"is a literal type.
 * ```
 * type T = "a"
 * ```
 */
export class LiteralType extends _BaseType {
  literal: Literal;
  constructor() {
    super(_TYPE_LITERAL);
  }
}
