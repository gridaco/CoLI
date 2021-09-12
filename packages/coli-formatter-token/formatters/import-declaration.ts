import { ImportDeclaration } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { indent } from "..";

/// _import string builder is dirty. this is because import declaratation definition does not follows. ts, but es typings.
/// this is an exception allowed by authors.

/**
 * @todo transpile lauganage
 * @todo value stringfy
 */
export function coliImportStringfy(c: ImportDeclaration) {
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
    fmt = [...fmt, f(SyntaxKind.OpenBraceToken), f(" ")];
    fmt = [...fmt, c.imports];
    // TODO: ->> ", " between import elements
    fmt = [...fmt, f(" "), f(SyntaxKind.CloseBraceToken)];
  }

  // make source
  fmt = [...fmt, f(" "), f(SyntaxKind.FromKeyword), f(" "), c.source, f("\n")];

  return fmt;
}
