import { Identifier } from "../ast";
import { SyntaxKind } from "../ast/syntax-kind";
import { ColiObject } from "../_abstract";
import { _TYPE_REFERENCE } from "../_internal";

/**
 * Based on the example below, `P` of T2 is a TypeReference. `P` and `P2` of T is a type parameter.  [Type parameter]({@link ./type-parameter})
 *
 * Example
 * ```
 * type T<P=any, P2> = T2<P>
 * ```
 */
export class TypeReference extends ColiObject {
  readonly typeName: Identifier;
  readonly kind: SyntaxKind.TypeReference;
  constructor(p: { typeName: Identifier }) {
    super(_TYPE_REFERENCE);
    this.typeName = p.typeName;
  }
}
