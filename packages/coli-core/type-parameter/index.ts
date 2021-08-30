import { Identifier } from "../ast";
import { SyntaxKind } from "../ast/syntax-kind";

/**
 * Based on the example below, `P` and `P2` of T is a type parameter. `P` of T2 is a [Type reference ]({@link ./type-reference/index.ts#TypeReference})
 *
 * Example
 * ```
 * type T<P=any, P2> = T2<P>
 * ```
 */
export class TypeParameter {
  readonly typeName: Identifier;
  readonly kind: SyntaxKind.TypeParameter;
  /**
   * based on below example, `string` is a default type here.
   * ```ts
   * T<P=string>
   * ```
   */
  default: any;

  constructor(p: { typeName: Identifier }) {
    this.typeName = p.typeName;
  }
}
