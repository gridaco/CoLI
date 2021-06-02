import { Identifier } from "../../ast/identifier";
import { SyntaxKind } from "../../ast/syntax-kind";
import { Type, Types } from "../../type";
import { ColiObject } from "../../_abstract";
import { VariableKind } from "../../_internal/kinds/variable-kind";
import { _DECLARATION_VARIABLE } from "../../_internal/node-name";
import { Declaration } from "../declaration.base";

export class VariableDeclaration extends Declaration {
  readonly kind: VariableKind = SyntaxKind.LetKeyword;
  readonly type: Type = Types.none;
  readonly id: Identifier;

  // TODO: this should be refactored as variable decl
  readonly initializer?: ColiObject;

  constructor(
    name: string,
    args?: {
      kind: VariableKind;
      type?: Type;
      initializer?: ColiObject;
    }
  ) {
    super(_DECLARATION_VARIABLE);

    this.id = new Identifier(name);
    if (args) {
      args.initializer && (this.initializer = args.initializer);
      args.type && (this.type = args.type);
      args.kind && (this.kind = args.kind);
    }
  }
}
