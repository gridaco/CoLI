import { Block, Type } from "coli/lib";
import { FunctionDeclaration } from "coli/lib/declarations/function";
import { stringfy } from "../..";
function Typescript(coli: FunctionDeclaration) {
  const {
    body,
    name,
    params,
    returnType: { keyword: type },
  } = coli;
  let code = "";
  if (params) {
    const parameters = params
      .map((i) => `${i.name} : ${i.typeAnnotation.keyword}`)
      .join(", ");
    code = `function ${name}(${parameters}) : ${type} {\n`;
  } else {
    code = `function ${name}() : ${type} {\n`;
  }
  console.log(body);
  code += body.body
    .map((i) => {
      if (Array.isArray(i)) {
        return stringfy(i, {
          language: "typescript",
        });
      }
    })
    .join("\n");

  code += `\n}`;
  return code;
}

function Python(coli: FunctionDeclaration) {
  let code = "from ";

  return code;
}

function Dart(coli: FunctionDeclaration) {
  let code = ``;
  return code;
}

export const StringfyFunction = {
  Typescript,
  Python,
  Dart,
};
