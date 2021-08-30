import { Identifier } from "../ast";
import { SyntaxKind } from "../ast/syntax-kind";

/**
 * Based on the example below, `P` of T2 is a TypeReference. `P` and `P2` of T is a type parameter.  [Type parameter]({@link ./type-parameter})
 *
 * Example
 * ```
 * type T<P=any, P2> = T2<P>
 * ```
 */
export class TypeReference {
  readonly typeName: Identifier;
  readonly kind: SyntaxKind.TypeReference;
  constructor(p: { typeName: Identifier }) {
    this.typeName = p.typeName;
  }
}
