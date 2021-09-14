import { ImportDefaultSpecifier } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";

export function astfmt_import_default_specifier(c: ImportDefaultSpecifier) {
  const {
    local: { name },
  } = c;
  return name;
}
