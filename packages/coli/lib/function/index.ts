import { Snippet } from "../snippet";
import { Type, Types } from "../type";

export class Function {
  private functionName: string;
  private functionArguments: object;
  private functionReturnType: Type;
  private code: string;
  innerContent: string | Snippet;

  constructor(funcName: string, args?: object, returnType?: Type) {
    this.functionName = funcName;
    this.functionArguments = args;
    this.functionReturnType = returnType;
  }

  public args(args: object) {
    this.functionArguments = args;
    return this;
  }

  public returnType(type: Type) {
    this.functionReturnType = type;
    return this;
  }

  public content(content: any) {
    this.innerContent = content;
    return this;
  }

  public call() {
    this.code = `function ${this.functionName}`;

    if (this.functionArguments != null) {
      const paramLength = Object.keys(this.functionArguments).length;
      let params = "(";
      Object.keys(this.functionArguments).map((i, ix) => {
        if (paramLength == ix + 1) {
          params += ` ${i} : ${this.functionArguments[i].type}`;
        } else {
          params += `${i} : ${this.functionArguments[i].type},`;
        }
      });
      this.code += `${params}) : `;
    }

    this.code += `${
      this.functionReturnType == null ? "any" : this.functionReturnType.type
    } {`;

    this.code +=
      this.innerContent instanceof Snippet
        ? this.innerContent._defaultSnippet
        : this.innerContent;

    this.code += `}`;
    return this.code;
  }
}
