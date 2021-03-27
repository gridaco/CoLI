import { Type } from "coli/lib";

interface ImportDeclaration {}

function Typescript(coli: ImportDeclaration) {
  let code = "";

  code += ";";
  return code;
}

function Python(coli: ImportDeclaration) {
  let code = "";

  code += ";";
  return code;
}

function Dart(coli: ImportDeclaration) {
  let code = "";

  code += ";";
  return code;
}

export const StringfyImport = {
  Typescript,
  Python,
  Dart,
};
