import { SyntaxKind } from "../ast/syntax-kind";

/**
 * Union type
 * ```ts
 * // examples
 * type NumericUnion = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
 * type Ascii = "a" | "b" | "c" | "d";
 * type LoginStrategy = EmialStrategy | PhoneStrategy;
 * ```
 */
export class UnionType {
  kind: SyntaxKind.UnionType;
  public readonly types: [];
  constructor(p: { types: [] }) {
    this.types = p.types;
  }
}
