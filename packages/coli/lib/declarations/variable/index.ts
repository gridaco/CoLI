import { stringfy } from "../../../../export-string";
import { Type, Types } from "../../builders/type";
import { _DECLARATION_VARIABLE } from "../../_internal/constants/declarations-name";
import { Declaration } from "../declaration.base";

type ESScope = "const" | "let" | "var";

type VariableScope = ESScope;

export class VariableDeclaration extends Declaration {
  scope: VariableScope;
  variableType: Type = Types.any;
  name: string;
  value?: any;

  constructor(params: {
    scope: VariableScope;
    name: string;
    value?: any;
    variableType?: Type;
  }) {
    super(_DECLARATION_VARIABLE);
    if (params.value) {
      this.value = params.value;
    }
    if (params.variableType) {
      this.variableType = params.variableType;
    }
    this.scope = params.scope;
    this.name = params.name;
  }
}

console.log(
  stringfy(
    new VariableDeclaration({
      scope: "const",
      name: "test",
      value: "1",
      variableType: Types.any,
    }),
    { language: "typescript" }
  )
);
