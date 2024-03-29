import type { VariableDeclaration } from "@coli.codes/core";
import { stringfy_tokenformatted, StringfyOptions } from "..";
import { formatters } from "@coli.codes/ast-formatter";

/**
 * @todo transpile lauganage
 * @todo value stringfy
 */
export function strfy_variable_declaration(
  c: VariableDeclaration,
  l: StringfyOptions
): string {
  const ast = formatters.astfmt_variable_declaration(c);
  return stringfy_tokenformatted(ast, l);

  // const { kind, type, id, initializer } = c;
  // const _opt = { language: l };
  // let code = `${stringfyKind(kind)} ${stringfy(id, _opt)}`;
  // if (type) {
  //   const _typeref = stringfy(type, _opt);
  //   code += _typeref
  //     ? `${KeywordAndTokenStatic.ColonToken}${KeywordAndTokenStatic.BreakSpaceToken}${_typeref}`
  //     : "";
  // }
  // if (initializer) {
  //   code += `${KeywordAndTokenStatic.BreakSpaceToken}${
  //     KeywordAndTokenStatic.EqualsToken
  //   }${KeywordAndTokenStatic.BreakSpaceToken}${stringfy(initializer, _opt)}`;
  // }

  // // finalize
  // code += eo.FILALIZED_END_OF_LINE_TOKEN_VALUE;

  // return code;
}

// function stringfyKind(kind: VariableKind) {
//   switch (kind) {
//     case SyntaxKind.LetKeyword:
//       return KeywordAndTokenStatic.LetKeyword;
//     case SyntaxKind.ConstKeyword:
//       return KeywordAndTokenStatic.ConstKeyword;
//     case SyntaxKind.VarKeyword:
//       return KeywordAndTokenStatic.VarKeyword;
//   }
//   throw `variable kind "${kind}" is not recognized as es standard kind`;
// }
