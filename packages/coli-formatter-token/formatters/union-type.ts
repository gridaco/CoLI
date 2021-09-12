import { UnionType } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { indent } from "..";

export function astfmt_union_type(c: UnionType) {
  const { types } = c;
  const _space_bar_space_ = [f(" "), f(SyntaxKind.BarToken), f(" ")]; // " | "
  return indent.insertBetween(types, _space_bar_space_);
}
