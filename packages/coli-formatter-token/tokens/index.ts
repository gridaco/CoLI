import { SyntaxKind } from "@coli.codes/core-syntax-kind";

type FormatterTokenLike = SyntaxKind | " " | "\n" | "\t" | "";

export class FormattingToken {
  constructor(readonly kind: FormatterTokenLike) {}
}

export default function formatting_token(kind: FormatterTokenLike) {
  return new FormattingToken(kind);
}
