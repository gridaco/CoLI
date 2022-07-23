import { CommentTrivia } from "coli";
import { StringfyOptions, stringfy_tokenformatted } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_comment_trivia(
  c: CommentTrivia,
  l?: StringfyOptions
): string {
  const ast = formatters.astfmt_comment_trivia(c);
  return stringfy_tokenformatted(ast, l);
}
