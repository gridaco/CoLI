import { Identifier } from "../../ast";
import { ColiBuilder } from "../../builder/builder";
import { FunctionDeclaration } from "../../declarations/function";
import { JSXElement } from "../../jsx";

export class JSX extends ColiBuilder {
  static anonymous(identifer: Identifier) {
    return new JSXElement(identifer.name);
  }

  static fromFunction<F extends FunctionDeclaration>(_function: F, args?: {}) {}

  static fromClass<C>() {}

  static fragment() {}

  __finalize() {
    throw new Error("Method not implemented.");
  }
}
