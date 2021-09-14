import { InterfaceDeclaration } from "coli";
import { stringfy_tokenformatted, StringfyLanguage } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_interface_declaration(
  c: InterfaceDeclaration,
  l: StringfyLanguage
) {
  const ast = formatters.astfmt_interface_declaration(c);
  return stringfy_tokenformatted(ast);

  //   return `${KeywordAndTokenStatic.InterfaceKeyword} ${stringfy(c.name, {
  //     language: l,
  //   })} ${KeywordAndTokenStatic.OpenBraceToken}
  // ${indent.onEachLine(
  //   stringfy(c.members, {
  //     language: l,
  //     joinWith: KeywordAndTokenStatic.BreakLineToken,
  //   })
  // )}
  // ${KeywordAndTokenStatic.CloseBraceToken}`;
}
