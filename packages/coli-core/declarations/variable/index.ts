import { Identifier } from "../../ast/identifier";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { Type, Types } from "../../type";
import { TypeReference } from "../../type-reference";
import { ColiObject } from "../../_abstract";
import { VariableKind } from "../../_internal/kinds/variable-kind";
import { _DECLARATION_VARIABLE } from "../../_internal/node-name";
import { Declaration } from "../declaration.base";

type VariableKindInput = "let" | "const" | "var" | VariableKind;
function _to_varkind(i: VariableKindInput): VariableKind {
  switch (i) {
    case "const":
      return SyntaxKind.ConstKeyword;
    case "let":
      return SyntaxKind.LetKeyword;
    case "var":
      return SyntaxKind.VarKeyword;
  }
  return i;
}

export class VariableDeclaration extends Declaration {
  readonly kind: VariableKind = SyntaxKind.LetKeyword;
  readonly type: Type | TypeReference;
  readonly id: Identifier;

  // TODO: this should be refactored as variable decl
  readonly initializer?: ColiObject;

  constructor(
    name: string,
    args?: {
      kind: VariableKindInput;
      type?: Type | TypeReference;
      initializer?: ColiObject;
    }
  ) {
    super(_DECLARATION_VARIABLE);

    this.id = new Identifier(name);
    if (args) {
      args.initializer && (this.initializer = args.initializer);
      args.type && (this.type = args.type);
      args.kind && (this.kind = _to_varkind(args.kind));
    }
  }
}
