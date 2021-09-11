import { InterfaceDeclaration } from "coli";
import { StringfyLanguage, stringfy } from "..";
import { indent } from "@coli.codes/export-string-core";
export function _strfy_interface_declaration(
  c: InterfaceDeclaration,
  l: StringfyLanguage
) {
  // c.members
  return `interface ${stringfy(c.name, { language: l })} {
${indent.onEachLine(stringfy(c.members, { language: l, joinWith: "\n" }))}
}`;
  //
}
