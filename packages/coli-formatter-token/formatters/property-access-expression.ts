import { PropertyAccessExpression } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { indent } from "..";

export function astfmt_property_access(c: PropertyAccessExpression) {
  const { expression, name } = c;
  return [expression, f(SyntaxKind.DotToken), name];
}
