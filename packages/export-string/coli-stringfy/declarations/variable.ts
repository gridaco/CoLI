import { Type } from "coli/lib";
import { VariableDeclaration } from "coli/lib/declarations/variable";
import { convertValue } from "../../utils/convert-value";

// FIXEM id has changed to identifier which is another coli object, convert identifer {name : "a"} as a via identifier converter.

function Typescript(coli: VariableDeclaration) {
  const {
    kind,
    id: name,
    type: { keyword: type },
    initializer: init,
  } = coli;

  let code = "";

  code += `${kind} ${name} : ${type}`;

  if (init) {
    code += ` = ${convertValue(init)}`;
  }

  code += ";";

  return code;
}

function Python(coli: VariableDeclaration) {
  const { kind, id: name, type: variableType, initializer: init } = coli;
  let code = "";

  code += `${kind} ${name} : ${variableType.keyword}`;

  if (init != null) {
    code += " ";
    switch (typeof init) {
      case "string":
        code += `= "${init}"`;
        break;
      case "object":
        code += `= ${JSON.stringify(init)}`;
        break;
      default:
        code += `= ${init}`;
    }
  }

  code += ";";

  return code;
}

function Dart(coli: VariableDeclaration) {
  const { kind, id: name, type: variableType, initializer: init } = coli;
  let code = "";

  code += `${kind} ${name} : ${variableType.keyword}`;

  if (init != null) {
    code += " ";
    switch (typeof init) {
      case "string":
        code += `= "${init}"`;
        break;
      case "object":
        code += `= ${JSON.stringify(init)}`;
        break;
      default:
        code += `= ${init}`;
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
