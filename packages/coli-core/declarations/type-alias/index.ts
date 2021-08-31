import { Identifier } from "../../ast";
import { FunctionType } from "../../types/function-type";
import { LiteralType } from "../../types/literal-type";
import { TypeParameter } from "../../type-parameter";
import { UnionType } from "../../types/union-type";
import { SyntaxKind, _DECLARATION_TYPE_ALIAS } from "../../_internal";
import { Declaration } from "../declaration.base";
import { TypeLike } from "../../types";

/**
 *
 * based on below, the whole statement is a type alias declaration.
 * ```
 * type ThisIsATypeAlias = number | string | OtherType | { hi : YOU }
 * ```
 */
export class TypeAliasDeclaration extends Declaration {
  readonly kind = SyntaxKind.TypeAliasDeclaration;
  readonly name: Identifier;
  typeParameters?: TypeParameter[];
  type: TypeLike;

  constructor() {
    super(_DECLARATION_TYPE_ALIAS);
  }
}
