import { FunctionDeclaration } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { indent } from "..";

export function coliFunctionStringfy(c: FunctionDeclaration): string {
  const { id, params, body, returnType } = c;
  const interpreter = languageInterpreter(l);
  let code = "";
  code += `${interpreter.FunctionKeyword} `;
  code += `${stringfy(id, { language: l })} `;
  code += `(${stringfy(params, { language: l, joinWith: ", " })}) `;
  if (returnType) {
    code += `: ${returnType.keyword} `;
  }

  // add body block
  code += `${stringfy(body, { language: l })}`;
  code += KeywordAndTokenStatic.BreakLineToken;
  return code;
}
