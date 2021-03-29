import { Block, Type } from "coli/lib";
import {
  ImportDefaultSpecifier,
  ImportSpecifier,
} from "coli/lib/declarations/import";

interface FunctionDeclaration {
  leadingComment: Array<any>;
  tralingComments: Array<any>;
  params: any;
  name: string;
  body: Block;
  returnType: Type;
}

function Typescript(coli: FunctionDeclaration) {
  const { body, name, params } = coli;
  console.log();
  let code = `function ${name}(${Object.keys(params)
    .map((i) => `${i} : ${params[i].type}`)
    .join(", ")}) {\n`;

  code += `${body.body[0][0]._defaultSnippet}`;

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
