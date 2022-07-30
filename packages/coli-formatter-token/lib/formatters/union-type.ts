import type { UnionType } from "@coli.codes/core";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";

export function astfmt_union_type(c: UnionType) {
  const { types } = c;
  const _space_bar_space_ = [f(" "), f(SyntaxKind.BarToken), f(" ")]; // " | "
  return inject.insertBetween(types, _space_bar_space_);
}
