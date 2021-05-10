import { FunctionDeclaration } from "coli";
import { stringfy, StringfyLanguage } from "..";
import { languageInterpreter } from "../interperters/main-interpreter";

export function coliFunctionStringfy(
  c: FunctionDeclaration,
  l: StringfyLanguage
): string {
  const { id, params, body, returnType } = c;
  const interpreter = languageInterpreter(l);
  let code = "";
  code += `${interpreter.FunctionKeyword} `;
  code += `${stringfy(id, { language: l })} `;
  code += `(${stringfy(params, { language: l, arrayDivison: ", " })}) `;
  if (returnType) {
    code += `: ${returnType.keyword} `;
  }
  code += `${stringfy(body, { language: l })}`;
  return code;
}
