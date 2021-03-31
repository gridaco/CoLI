import { FunctionDeclaration } from "coli/lib/declarations/function";
import { StringfyLanguage } from "../..";

export function coliFunctionStringfy(
  c: FunctionDeclaration,
  l: StringfyLanguage
): string {
  const {
    name,
    params,
    body: { body },
    returnType: { keyword: type },
  } = c;
  let code = `function ${name}(`;

  code += params
    .map((p) => `${p.name} : ${p.typeAnnotation.keyword}`)
    .join(", ");

  code += `) : ${type} {\n`;

  const stringfyBody = body
    .map((i) => {
      if (i instanceof Array) {
        const innerData = i.map((j) => j._defaultSnippet);
        return innerData;
      }
    })
    .flat()
    .join("\n");

  code += stringfyBody + "\n";

  code += "}";

  return code;
}
