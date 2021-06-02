import { SyntaxKind } from "@coli.codes/core/ast/syntax-kind";
import { VariableKind } from "@coli.codes/core/_internal";
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

  let code = `${stringfyKind(kind)} ${stringfy(id, { language: l })}`;
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

function stringfyKind(kind: VariableKind) {
  switch (kind) {
    case SyntaxKind.LetKeyword:
      return "let";
    case SyntaxKind.ConstKeyword:
      return "const";
    case SyntaxKind.VarKeyword:
      return "var";
  }
  throw `variable kind "${kind}" is not recognized as es standard kind`;
}
