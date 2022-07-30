import type { PropertyAssignment } from "@coli.codes/core";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";

export function astfmt_property_assignment(c: PropertyAssignment) {
  return [c.name, f(SyntaxKind.ColonToken), f(" "), c.initializer];
}
