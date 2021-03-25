import { stringfy } from "../../../../export-string";
import { Type, Types } from "../../builders/type";
import { _DECLARATION_VARIABLE } from "../../_internal/constants/declarations-name";
import { Declaration } from "../declaration.base";

type JsScope = "var" | "let" | "const";
type DartScope =
  | "var"
  | "dynamic"
  | "const"
  | "final"
  | "Number"
  | "String"
  | "Booleans"
  | "List"
  | "Set"
  | "Map"
  | "Runes"
  | "Symbols";

type ScopeType = JsScope | DartScope;

export class VariableDeclaration extends Declaration {
  private scope: ScopeType;
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

console.log(
  stringfy(
    new VariableDeclaration({
      scope: "const",
      varType: Types.any,
      initValue: "",
      name: "test",
    }),
    { language: "python" }
  )
);
