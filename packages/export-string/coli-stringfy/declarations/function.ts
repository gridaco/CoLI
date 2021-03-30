import { Block, Type } from "coli/lib";
import { Identifier } from "coli/lib/ast/identifier";

interface FunctionDeclaration {
  leadingComment: Array<any>;
  tralingComments: Array<any>;
  params: Identifier[];
  name: string;
  body: Block;
  returnType: Type;
}

function Typescript(coli: FunctionDeclaration) {
  const {
    body,
    name,
    params,
    returnType: { type },
  } = coli;
  let code = "";
  if (params) {
    const parameters = params
      .map((i) => `${i.name} : ${i.typeAnnotation.type}`)
      .join(", ");
    code = `function ${name}(${parameters}) : ${type} {\n`;
  } else {
    code = `function ${name}() : ${type} {\n`;
  }

  // console.log(body.body.map(i => i.));
  // code += `${body.body[0][0]._defaultSnippet}`;

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
