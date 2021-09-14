import { JsxBaseElement } from "@coli.codes/jsx-core/elements";
import { ReturnStatement } from "coli";
import { stringfy_tokenformatted, StringfyLanguage } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_return_statement(
  c: ReturnStatement,
  l: StringfyLanguage
): string {
  const ast = formatters.astfmt_return_statement(c);
  return stringfy_tokenformatted(ast);

  // const { argument } = c;
  // if (argument instanceof JsxBaseElement) {
  //   return `${KeywordAndTokenStatic.ReturnKeyword}${
  //     KeywordAndTokenStatic.BreakSpaceToken
  //   }${KeywordAndTokenStatic.OpenParenToken}
  //   ${indent.onEachLine(stringfy(argument, { language: l }))}
  // ${KeywordAndTokenStatic.CloseParenToken}`;
  // }
  // return `${KeywordAndTokenStatic.ReturnKeyword}${
  //   KeywordAndTokenStatic.BreakSpaceToken
  // }${stringfy(argument, {
  //   language: l,
  // })}`;
}
