import { Type } from "coli/lib";

interface VariableDeclaration {
  scope: string;
  variableType: Type;
  name: string;
  value?: any;
}

function Typescript(coli: VariableDeclaration) {
  const {
    scope,
    name,
    variableType: { type },
    value,
  } = coli;
  let code = "";

  code += `${scope} ${name} : ${type}`;

  if (value != null) {
    code += " ";
    if (type != "any" && type !== typeof value) {
      throw new Error("This is a contradiction. Type does not match.");
    }

    switch (typeof value) {
      case "string":
        code += `= "${value}"`;
        break;
      case "object":
        code += `= ${JSON.stringify(value)}`;
        break;
      default:
        code += `= ${value}`;
    }
  }

  code += ";";

  return code;
}

function Python(coli: VariableDeclaration) {
  const { scope, name, variableType, value } = coli;
  let code = "";

  code += `${scope} ${name} : ${variableType.type}`;

  if (value != null) {
    code += " ";
    switch (typeof value) {
      case "string":
        code += `= "${value}"`;
        break;
      case "object":
        code += `= ${JSON.stringify(value)}`;
        break;
      default:
        code += `= ${value}`;
    }
  }

  code += ";";

  return code;
}

function Dart(coli: VariableDeclaration) {
  const { scope, name, variableType, value } = coli;
  let code = "";

  code += `${scope} ${name} : ${variableType.type}`;

  if (value != null) {
    code += " ";
    switch (typeof value) {
      case "string":
        code += `= "${value}"`;
        break;
      case "object":
        code += `= ${JSON.stringify(value)}`;
        break;
      default:
        code += `= ${value}`;
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
