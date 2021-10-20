import { Identifier } from "../../ast/identifier";
import { Type, Types } from "../../type";
import { BlockStatement } from "../../statements";
import { _DECLARATION_FUNCTION } from "../../_internal/node-name/declarations-name";
import { Declaration } from "../declaration.base";
import assert from "assert";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";

/**
 * @exceptional
 * the default structure of modifiers is in array form.
 * but here, we use object form so we can prevent duplicated modifer on ast token level.
 */
type FunctionModifiers = {
  export?: SyntaxKind.ExportKeyword;
  default?: SyntaxKind.DefaultKeyword;
  async?: SyntaxKind.AsyncKeyword;
  declare?: SyntaxKind.DeclareKeyword;
};

export class FunctionDeclaration extends Declaration {
  /**
   * optional function identifier. if falsy, it means this function is anonymous.
   */
  id?: Identifier;
  params: Identifier[];
  body: BlockStatement;
  returnType: Type;

  /**
   * the modifiers of function declaration.
   * e.g. `export`, `default`, `async`, `declare`
   */
  modifiers?: FunctionModifiers = {};

  constructor(
    name?: string,
    args?: {
      params?: Identifier[];
      returnType?: Type;
      body?: BlockStatement;
      modifiers?: FunctionModifiers;
    }
  ) {
    super(_DECLARATION_FUNCTION);
    // validate function name
    // ref: https://stackoverflow.com/questions/2008279/validate-a-javascript-function-name
    assert(
      name ? /^[$A-Z_][0-9A-Z_$]*$/i.test(name) : true,
      "invalid function name"
    );

    // identifier is optional
    this.id = name ? new Identifier(name) : undefined;

    // set return type. default value is provided.
    if (args?.returnType) {
      this.returnType = args.returnType;
    }
    if (args?.body) {
      this.body = args.body;
    }
    if (args?.params) {
      this.params = args.params;
    }
    if (args?.modifiers) {
      this.modifiers = args.modifiers;
    }
  }
}
