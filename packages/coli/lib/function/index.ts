import { ColiBuilder } from "../builder";
import { Snippet } from "../snippet";
import { Type, Types } from "../type";

export class Function extends ColiBuilder {
  private _name: string;
  private _params: object;
  private _returnType: Type;
  private _content: string | Snippet;
  code: string;

  constructor(funcName: string, args?: object, returnType?: Type) {
    super();
    this._name = funcName;
    this._params = args;
    this._returnType = returnType;
  }

  public args(args: object) {
    this._params = args;
    return this;
  }

  public returnType(type: Type) {
    this._returnType = type;
    return this;
  }

  public content(content: any) {
    this._content = content;
    return this;
  }

  public exportAs() {
    this.code = `function ${this._name}`;

    if (this._params != null) {
      const paramLength = Object.keys(this._params).length;
      let params = "(";
      Object.keys(this._params).map((i, ix) => {
        if (paramLength == ix + 1) {
          params += ` ${i} : ${this._params[i].type}`;
        } else {
          params += `${i} : ${this._params[i].type},`;
        }
      });
      this.code += `${params}) : `;
    }

    this.code += `${
      this._returnType == null ? "any" : this._returnType.type
    } {`;

    this.code +=
      this._content instanceof Snippet
        ? this._content._defaultSnippet
        : this._content;

    this.code += `}`;
    return this.code;
  }
}
