import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { FunctionDeclaration } from "coli";
import { stringfy, StringfyLanguage } from "..";
import { languageInterpreter } from "../interperters/main-interpreter";

export function strfy_function_declaration(
  c: FunctionDeclaration,
  l: StringfyLanguage
): string {
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
