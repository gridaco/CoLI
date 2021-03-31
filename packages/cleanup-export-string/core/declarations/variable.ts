import { VariableDeclaration } from "coli/lib/declarations/variable";
import { StringfyLanguage } from "../..";

export function coliVariableStringfy(
  c: VariableDeclaration,
  l: StringfyLanguage
): string {
  const {
    kind,
    type: { keyword: type },
    id: { name },
    initializer,
  } = c;
  let code = "";

  code += `${kind} ${name}`;

  if (type) {
    code += ` : ${type}`;
  }

  console.log(code);

  // initializer

  return code;
}
