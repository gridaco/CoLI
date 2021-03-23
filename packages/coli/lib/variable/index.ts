import { Type, Types } from "../type";

type JSVariableType = "var" | "let" | "const";
type DartVariableType =
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

type VariableType = JSVariableType | DartVariableType;

// TODO Call Value string -> "string", boject -> { object }
export class Variable {
  private variableDefineType: VariableType;
  private variableName: string;
  private variableValue: any;
  private variableType: Type;
  private code: string;

  constructor(name: string) {
    this.variableName = name;
  }

  public defineType(type: VariableType) {
    this.variableDefineType = type;
    return this;
  }

  public valueType(type: Type) {
    this.variableType = type;
    return this;
  }

  public value(value: any) {
    this.variableValue = value;
    return this;
  }

  public call() {
    this.code = `${this.variableDefineType} ${this.variableName}`;

    if (this.valueType != null) {
      this.code += ` : ${this.variableType.type}`;
    }

    if (this.variableValue != null) {
      this.code += ` = ${this.variableValue}`;
    }

    this.code += ";";
    return this.code;
  }
}
