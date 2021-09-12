import { ImportDefaultSpecifier } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { indent } from "..";

export function astfmt_default_import(c: ImportDefaultSpecifier) {
  const {
    local: { name },
  } = c;
  return name;
}
