import { Type, Types } from "../../builders/type";
import { _DECLARATION_VARIABLE } from "../../_internal/constants/declarations-name";
import { Declaration } from "../declaration.base";

type JSscope = "const" | "let" | "var";

export class VariableDeclaration extends Declaration {
  private scope: JSscope;
  private name: string;
  private varType: Type;
  private initValue: any;

  constructor({ scope, name, varType, initValue }) {
    super(_DECLARATION_VARIABLE);
    this.scope = scope;
    this.name = name;
    this.varType = varType;
    this.initValue = initValue;
  }

  public exportAs() {}

  public exportAsTypescript() {
    let code = "";

    code += `${this.scope} ${this.name} `;

    if (this.initValue != null) {
      switch (typeof this.initValue) {
        case "string":
          code += `= "${this.initValue}"`;
          break;
        case "object":
          code += `= ${JSON.stringify(this.initValue)}`;
          break;
        default:
          code += `= ${this.initValue}`;
      }
    }

    code += ";";

    return code;
  }
}
