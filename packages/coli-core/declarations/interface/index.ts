import { Identifier } from "../../ast/identifier";
import { SyntaxKind } from "../../ast/syntax-kind";
import { PropertySignature } from "../../property-signature";
import { _DECLARATION_VARIABLE } from "../../_internal/node-name";
import { Declaration } from "../declaration.base";

export class InterfaceDeclaration extends Declaration {
  readonly kind = SyntaxKind.InterfaceDeclaration;

  /**
   * name of the interface
   * ```ts
   * interface <NAME> {
   *    ...
   * }
   * ```
   */
  readonly name: Identifier;

  /**
   * type parameters of the interface
   * ```ts
   * interface IWithGeneric<T, T2=any> {
   *   ...
   * }
   * ```
   * @deprecated - not implemented
   */
  typeParameters?: [] = undefined;

  /**
   * ```ts
   * interface IWithMembers {
   *   // ...
   *   member1: number;
   *   member2: string;
   *   // ...
   * }
   * ```
   */
  members: PropertySignature[] = [];

  constructor(name: string) {
    super(_DECLARATION_VARIABLE);

    this.name = new Identifier(name);
  }
}
