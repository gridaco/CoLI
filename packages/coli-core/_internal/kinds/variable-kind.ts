import { SyntaxKind } from "@coli.codes/core-syntax-kind";

type EsVarKind =
  | SyntaxKind.ConstKeyword
  | SyntaxKind.LetKeyword
  | SyntaxKind.VarKeyword;

export type VariableKind = EsVarKind;
