import { InterfaceDeclaration } from "coli";
import { StringfyLanguage, stringfy } from "..";
import { indent, KeywordAndTokenStatic } from "@coli.codes/export-string-core";
export function _strfy_interface_declaration(
  c: InterfaceDeclaration,
  l: StringfyLanguage
) {
  return `${KeywordAndTokenStatic.InterfaceKeyword} ${stringfy(c.name, {
    language: l,
  })} ${KeywordAndTokenStatic.OpenBraceToken}
${indent.onEachLine(
  stringfy(c.members, {
    language: l,
    joinWith: KeywordAndTokenStatic.BreakLineToken,
  })
)}
${KeywordAndTokenStatic.CloseBraceToken}`;
}
