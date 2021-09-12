import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { VariableKind } from "@coli.codes/core/_internal";
import { VariableDeclaration } from "coli";
import { stringfy, StringfyLanguage } from "..";
import { eo, KeywordAndTokenStatic } from "@coli.codes/export-string-core";

/**
 * @todo transpile lauganage
 * @todo value stringfy
 */
export function coliVariableStringfy(
  c: VariableDeclaration,
  l: StringfyLanguage
): string {
  const { kind, type, id, initializer } = c;
  const _opt = { language: l };
  let code = `${stringfyKind(kind)} ${stringfy(id, _opt)}`;
  if (type) {
    const _typeref = stringfy(type, _opt);
    code += _typeref
      ? `${KeywordAndTokenStatic.ColonToken}${KeywordAndTokenStatic.BreakSpaceToken}${_typeref}`
      : "";
  }
  if (initializer) {
    code += `${KeywordAndTokenStatic.BreakSpaceToken}${
      KeywordAndTokenStatic.EqualsToken
    }${KeywordAndTokenStatic.BreakSpaceToken}${stringfy(initializer, _opt)}`;
  }

  // finalize
  code += eo.FILALIZED_END_OF_LINE_TOKEN_VALUE;

  return code;
}

function stringfyKind(kind: VariableKind) {
  switch (kind) {
    case SyntaxKind.LetKeyword:
      return KeywordAndTokenStatic.LetKeyword;
    case SyntaxKind.ConstKeyword:
      return KeywordAndTokenStatic.ConstKeyword;
    case SyntaxKind.VarKeyword:
      return KeywordAndTokenStatic.VarKeyword;
  }
  throw `variable kind "${kind}" is not recognized as es standard kind`;
}
