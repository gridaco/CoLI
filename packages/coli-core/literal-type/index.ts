import { Literal } from "../literal";

/**
 *
 * What is LiteralType? - based on below example, "a"is a literal type.
 * ```
 * type T = "a"
 * ```
 */
export class LiteralType {
  literal: Literal;
  constructor() {}
}
