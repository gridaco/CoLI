import { FunctionDeclaration } from "coli/lib/declarations/function";
import { stringfy, StringfyLanguage } from "../..";
import { languageInterpreter } from "../../interperters/main-interpreter";

export function coliFunctionStringfy(
  c: FunctionDeclaration,
  l: StringfyLanguage
): string {
  const { id, params, body, returnType } = c;
  const interpreter = languageInterpreter(l);
  let code = "";
  code += `${interpreter.FunctionKeyword} `;
  code += `${stringfy(c.id, { language: l })} `;
  code += `(${stringfy(c.params, { language: l, arrayDivison: ", " })}) `;
  if (returnType) {
    code += `: ${returnType.keyword} `;
  }
  code += `${stringfy(c.body, { language: l })}`;
  return code;
}
