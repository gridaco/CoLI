import { ColiBuilder } from "../../builder";
import { Type, Types } from "../../builders/type";

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
export class Variable extends ColiBuilder {
  private _defineType: VariableType;
  private _name: string;
  private _value: any;
  private _type: Type;
  private code: string;

  constructor(name: string) {
    super();
    this._name = name;
  }

  public defineType(type: VariableType) {
    this._defineType = type;
    return this;
  }

  public valueType(type: Type) {
    this._type = type;
    return this;
  }

  public value(value: any) {
    this._value = value;
    return this;
  }

  public exportAs() {
    this.code = `${this._defineType} ${this._name}`;

    if (this._type != null) {
      this.code += ` : ${this._type.type}`;
    }

    if (this._value != null) {
      this.code += ` = ${this._value}`;
    }

    this.code += ";";
    return this.code;
  }
}
