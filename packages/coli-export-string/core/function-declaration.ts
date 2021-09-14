import { FunctionDeclaration } from "coli";
import { stringfy, stringfy_tokenformatted, StringfyLanguage } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_function_declaration(
  c: FunctionDeclaration,
  l: StringfyLanguage
): string {
  const ast = formatters.astfmt_function_declaration(c);
  return stringfy_tokenformatted(ast);

  // const { id, params, body, returnType } = c;
  // const interpreter = languageInterpreter(l);
  // let code = "";
  // code += `${interpreter.FunctionKeyword} `;
  // code += `${stringfy(id, { language: l })} `;
  // code += `(${stringfy(params, { language: l, joinWith: ", " })}) `;
  // if (returnType) {
  //   code += `: ${returnType.keyword} `;
  // }

  // // add body block
  // code += `${stringfy(body, { language: l })}`;
  // code += KeywordAndTokenStatic.BreakLineToken;
  // return code;
}
