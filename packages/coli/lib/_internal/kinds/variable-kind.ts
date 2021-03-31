import { SyntaxKind } from "../../ast/syntax-kind";

type EsVarKind =
  | SyntaxKind.ConstKeyword
  | SyntaxKind.LetKeyword
  | SyntaxKind.VarKeyword
  | "const"
  | "let"
  | "var";

export type VariableKind = EsVarKind;
