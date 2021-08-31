export { LiteralType } from "./literal-type";
export { FunctionType } from "./function-type";
export { UnionType } from "./union-type";

// ------------------------------------------------------------
import type { LiteralType } from "./literal-type";
import type { FunctionType } from "./function-type";
import type { Type } from "../type";
import type { UnionType } from "./union-type";
export type TypeLike = LiteralType | FunctionType | UnionType | Type;
// ------------------------------------------------------------
