import { Type, Types } from "../../builders/type";
import { ColiObject } from "../../_abstract";
import { VariableKind } from "../../_internal/kinds/variable-kind";
import { _DECLARATION_VARIABLE } from "../../_internal/node-name";
import { Declaration } from "../declaration.base";

export class VariableDeclaration extends Declaration {
  readonly kind: VariableKind = "let";
  readonly type: Type = Types.any;
  readonly name: string;

  // TODO: this should be refactored as variable decl
  readonly initializer?: ColiObject;

  constructor(
    name: string,
    args?: {
      kind: VariableKind;
      type?: Type;
      initializer?: any;
    }
  ) {
    super(_DECLARATION_VARIABLE);

    this.name = name;
    if (args) {
      args.initializer && (this.initializer = args.initializer);
      args.type && (this.type = args.type);
      args.kind && (this.kind = args.kind);
    }
  }
}
