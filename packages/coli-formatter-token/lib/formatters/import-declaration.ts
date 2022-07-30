import type { ImportDeclaration } from "@coli.codes/core";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";

/// _import string builder is dirty. this is because import declaratation definition does not follows. ts, but es typings.
/// this is an exception allowed by authors.
export function astfmt_import_declaration(c: ImportDeclaration) {
  let fmt: any[] = [f(SyntaxKind.ImportKeyword), f(" ")];

  // optional default import if default import provided.
  if (c.defaultImport) {
    fmt = [...fmt, c.defaultImport];
  }

  // if one or more than named import is specified.
  if (c.imports.length > 0) {
    //
    if (c.defaultImport) {
      fmt = [...fmt, f(SyntaxKind.CommaToken), f(" ")];
    }
    fmt = [
      ...fmt,
      f(SyntaxKind.OpenBraceToken),
      f(" "),
      inject.insertBetween(
        c.imports,
        // ", " between import elements
        [f(SyntaxKind.CommaToken), f(" ")]
      ),
      f(" "),
      f(SyntaxKind.CloseBraceToken),
    ];
  }

  // make source
  fmt = [
    ...fmt,
    f(" "),
    f(SyntaxKind.FromKeyword),
    f(" "),
    inject.wrapWithDoubleQuote(c.source),
    f(SyntaxKind.SemicolonToken),
    f("\n"),
  ];

  return fmt;
}
