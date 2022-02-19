import { SyntaxKind } from "@coli.codes/core-syntax-kind";
export { SyntaxKind } from "@coli.codes/core-syntax-kind";

export type FormatterTokenLike =
  | SyntaxKind
  | " "
  | "\n"
  | "\t"
  | "//"
  | "/**" // docstring start
  | " *" // docstring mid
  | "*/" // docstring end
  | ""
  | FormatterTokenLike[];

export class FormattingToken {
  constructor(readonly kind: FormatterTokenLike) {}
}

export default function formatting_token(
  kind?: FormatterTokenLike
): FormattingToken | undefined {
  return kind !== undefined && new FormattingToken(kind);
}
