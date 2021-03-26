import { Type } from "coli/lib";

interface VariableDeclaration {
  scope: string;
  name: string;
  varType: Type;
  initValue: any;
}

function Typescript(coli: VariableDeclaration) {
  const { scope, name, varType, initValue } = coli;
  let code = "";

  code += `${scope} ${name} : ${varType.type} `;

  if (initValue != null) {
    switch (typeof initValue) {
      case "string":
        code += `= "${initValue}"`;
        break;
      case "object":
        code += `= ${JSON.stringify(initValue)}`;
        break;
      default:
        code += `= ${initValue}`;
    }
  }

  code += ";";

  return code;
}

function Python(coli: VariableDeclaration) {
  const { scope, name, varType, initValue } = coli;
  let code = "";

  code += `${name} `;

  if (initValue != null) {
    switch (typeof initValue) {
      case "string":
        code += `= "${initValue}"`;
        break;
      case "object":
        code += `= ${JSON.stringify(initValue)}`;
        break;
      default:
        code += `= ${initValue}`;
    }
  }

  code += ";";

  return code;
}

function Dart(coli: VariableDeclaration) {
  const { scope, name, initValue } = coli;
  let code = "";

  code += `${scope} ${name} `;

  if (initValue != null) {
    switch (typeof initValue) {
      case "string":
        code += `= "${initValue}"`;
        break;
      case "object":
        code += `= ${JSON.stringify(initValue)}`;
        break;
      default:
        code += `= ${initValue}`;
    }
  }

  code += ";";

  return code;
}

export const StringfyVariable = {
  Typescript,
  Python,
  Dart,
};
