import { Identifier } from "../../ast/identifier";
import { ColiBuilder } from "../../builder";
import { FunctionDeclaration } from "../../declarations/function";
import { CallExpression } from "../../expressions/call-expression";
import { BlockStatement } from "../../statements";
import { Snippet } from "../snippet";
import { Type, Types } from "../type";

export class Function extends ColiBuilder<FunctionDeclaration> {
  private name: string;
  private parameters: Identifier[];
  private returnType: Type;
  private body: BlockStatement;

  constructor(funcName: string, parameters?: Identifier[], returnType?: Type) {
    super();
    this.name = funcName;
    this.parameters = parameters;
    this.returnType = returnType;
  }

  public withParams(...parameters: Identifier[]) {
    this.parameters = parameters;
    return this;
  }

  public returns(type: Type) {
    this.returnType = type;
    return this;
  }

  public withBody(content: BlockStatement) {
    this.body = content;
    return this;
  }

  // call this function
  call(): CallExpression {
    return new CallExpression((this.make() as FunctionDeclaration).id);
  }

  __finalize(): FunctionDeclaration {
    return new FunctionDeclaration(this.name, {
      returnType: this.returnType,
      body: this.body,
      params: this.parameters,
    });
  }

  public exportAs() {
    let code = "";
    code = `function ${this.name}`;

    if (this.parameters != null) {
      const paramLength = Object.keys(this.parameters).length;
      let params = "(";
      Object.keys(this.parameters).map((i, ix) => {
        if (paramLength == ix + 1) {
          params += ` ${i} : ${this.parameters[i].type}`;
        } else {
          params += `${i} : ${this.parameters[i].type},`;
        }
      });
      code += `${params}) : `;
    }

    code += `${this.returnType == null ? "any" : this.returnType.keyword} {`;

    code +=
      this.body instanceof Snippet ? this.body._defaultSnippet : this.body;

    code += `}`;
    return code;
  }
}
