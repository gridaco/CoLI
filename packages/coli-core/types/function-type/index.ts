import { TypeLike } from "..";
import { Parameter } from "../../parameter";
import { SyntaxKind, _TYPE_FUNCTION } from "../../_internal";
import { _BaseType } from "../type.base";

/**
 * function type, a.k.a lambda type
 * ```ts
 * // example
 * type FunctionType = (...args: any[]) => any;
 * ```
 */
export class FunctionType extends _BaseType {
  readonly kind = SyntaxKind.FunctionType;
  parameters: Parameter[];
  type: TypeLike;

  constructor() {
    super(_TYPE_FUNCTION);
  }
}
