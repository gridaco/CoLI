import { Type } from "coli/lib";
import { VariableStatement } from "coli/lib/statements/variable";
import { convertValue } from "../../utils/convert-value";

function Typescript(coli: VariableStatement) {
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

function Python(coli: VariableStatement) {
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

function Dart(coli: VariableStatement) {
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
