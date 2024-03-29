import type { ExportAssignment } from "@coli.codes/core";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";

export function astfmt_export_assignment(c: ExportAssignment) {
  const { identifier } = c;
  return [
    f(SyntaxKind.ExportKeyword),
    //
    f(" "),
    f(SyntaxKind.DefaultKeyword),
    f(" "),
    identifier,
    f(SyntaxKind.SemicolonToken),
  ];
}
