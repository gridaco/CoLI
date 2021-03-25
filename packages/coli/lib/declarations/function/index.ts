import { Identifier } from "../../ast/identifier";
import { Type } from "../../builders/type";
import { BlockStatement } from "../../statements";
import { _DECLARATION_FUNCTION } from "../../_internal/constants/declarations-name";
import { Declaration } from "../declaration.base";

export class FunctionDeclraration extends Declaration {
  id: Identifier;
  params: [];
  body: BlockStatement;
  returnType: Type;
  constructor() {
    super(_DECLARATION_FUNCTION);
  }
}
