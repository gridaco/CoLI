import { InterfaceDeclaration } from "coli";
import { StringfyLanguage, stringfy } from "..";

export function _strfy_interface_declaration(
  c: InterfaceDeclaration,
  l: StringfyLanguage
) {
  // c.members
  return `interface ${stringfy(c.name, { language: l })} {
${stringfy(c.members, { language: l, joinWith: "\n" })}
}`;
  //
}
