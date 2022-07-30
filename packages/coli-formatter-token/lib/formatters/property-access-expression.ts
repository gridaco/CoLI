import type { PropertyAccessExpression } from "@coli.codes/core";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { format, inject } from "..";

export function astfmt_property_access_expression(c: PropertyAccessExpression) {
  const { expression, name } = c;
  return [format(expression), f(SyntaxKind.DotToken), name];
}
