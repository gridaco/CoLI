import { TypeLike } from "..";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { _TYPE_UNION } from "../../_internal";
import { _BaseType } from "../type.base";

/**
 * Union type
 * ```ts
 * // examples
 * type NumericUnion = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
 * type Ascii = "a" | "b" | "c" | "d";
 * type LoginStrategy = EmialStrategy | PhoneStrategy;
 * ```
 */
export class UnionType extends _BaseType {
  kind: SyntaxKind.UnionType;
  public readonly types: TypeLike[];
  constructor(p: { types: TypeLike[] }) {
    super(_TYPE_UNION);
    this.types = p.types;
  }
}
