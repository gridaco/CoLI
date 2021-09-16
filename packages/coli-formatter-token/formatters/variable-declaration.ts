import { VariableDeclaration } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { format, inject } from "..";

export function astfmt_variable_declaration(c: VariableDeclaration) {
  const { kind, type, id, initializer } = c;
  let fmt: any[] = [f(kind), f(" "), id];

  if (type) {
    fmt = [...fmt, f(SyntaxKind.ColonToken), f(" "), type];
  }
  if (initializer) {
    fmt = [
      ...fmt,
      f(" "),
      f(SyntaxKind.EqualsToken),
      f(" "),
      format(initializer),
    ];
  }

  // finalize
  fmt = [...fmt, f(SyntaxKind.SemicolonToken), f("\n")];

  fmt = inject.extraTralingSpaceByBlockSize(fmt);

  return fmt;
}
