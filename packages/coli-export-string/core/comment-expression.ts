import { CommentTrivia } from "coli";
import { StringfyLanguage, stringfy_tokenformatted } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_comment_trivia(
  c: CommentTrivia,
  l?: StringfyLanguage
): string {
  const ast = formatters.astfmt_comment_trivia(c);
  return stringfy_tokenformatted(ast);
}
