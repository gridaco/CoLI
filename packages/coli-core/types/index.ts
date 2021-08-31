export { LiteralType } from "./literal-type";
export { FunctionType } from "./function-type";
export { UnionType } from "./union-type";

// ------------------------------------------------------------
import type { LiteralType } from "./literal-type";
import type { FunctionType } from "./function-type";
import type { Type } from "../type";
import type { UnionType } from "./union-type";
import type { _TypeKeyword } from "../keywords/_keyword";
export type TypeLike =
  | LiteralType
  | FunctionType
  | UnionType
  | _TypeKeyword
  | Type;
// ------------------------------------------------------------
