import { SyntaxKind } from "../../ast/syntax-kind";

type EsVarKind =
  | SyntaxKind.ConstKeyword
  | SyntaxKind.LetKeyword
  | SyntaxKind.VarKeyword;

export type VariableKind = EsVarKind;
