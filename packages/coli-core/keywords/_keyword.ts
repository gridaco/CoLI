import { SyntaxKind } from "../ast/syntax-kind";

type TypeKeyword =
  | SyntaxKind.ObjectKeyword
  | SyntaxKind.NumberKeyword
  | SyntaxKind.StringKeyword
  | SyntaxKind.AnyKeyword
  | SyntaxKind.BooleanKeyword
  | SyntaxKind.VoidKeyword
  | SyntaxKind.UndefinedKeyword
  | SyntaxKind.NullKeyword
  | SyntaxKind.NeverKeyword
  | SyntaxKind.TrueKeyword
  | SyntaxKind.FalseKeyword;

export abstract class _TypeKeyword {
  readonly kind: TypeKeyword;
}
