import { Type } from "coli/lib";
import { VariableDeclaration } from "coli/lib/declarations/variable";
import { convertValue } from "../../utils/convert-value";

// interface VariableDeclaration {
//   scope: string;
//   variableType: Type;
//   name: string;
//   value?: any;
// }

function Typescript(coli: VariableDeclaration) {
  const {
    kind,
    name,
    variableType: { type },
    value,
  } = coli;

  let code = "";

  code += `${kind} ${name} : ${type}`;

  if (value) {
    code += ` = ${convertValue(value)}`;
  }

  code += ";";

  return code;
}

function Python(coli: VariableDeclaration) {
  const { kind, name, variableType, value } = coli;
  let code = "";

  code += `${kind} ${name} : ${variableType.type}`;

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
  const { kind, name, variableType, value } = coli;
  let code = "";

  code += `${kind} ${name} : ${variableType.type}`;

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
