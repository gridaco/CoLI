import { Literal } from "coli";
import { stringfy_tokenformatted, StringfyLanguage } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_literal(c: Literal, l: StringfyLanguage): string {
  const ast = formatters.astfmt_literal(c);
  return stringfy_tokenformatted(ast);
  // const { value } = c;
  // const isTemplateLiteral = c instanceof TemplateLiteral;
  // if (!isTemplateLiteral) {
  //   return `${convertValue(value, l)}`;
  // } else if (isTemplateLiteral) {
  //   return `${KeywordAndTokenStatic.BacktickToken}${value}${KeywordAndTokenStatic.BacktickToken}`;
  // }
}
