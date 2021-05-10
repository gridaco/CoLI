import { VariableDeclaration } from "coli";
import { stringfy, StringfyLanguage } from "..";

/**
 * @todo transpile lauganage
 * @todo value stringfy
 */
export function coliVariableStringfy(
  c: VariableDeclaration,
  l: StringfyLanguage
): string {
  const {
    kind,
    type: { keyword: type },
    id,
    initializer,
  } = c;
  let code = `${kind} ${stringfy(id, { language: l })}`;
  if (type) {
    code += ` : ${type}`;
  }
  if (initializer) {
    code += ` = ${stringfy(initializer, { language: l })}`;
  }

  // finalize
  code += ";";

  return code;
}
