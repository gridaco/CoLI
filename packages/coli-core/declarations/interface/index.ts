import { Identifier } from "../../ast/identifier";
import { SyntaxKind } from "../../ast/syntax-kind";
import { PropertySignature } from "../../property-signature";
import { _DECLARATION_INTERFACE } from "../../_internal/node-name";
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

  constructor(p: { name: string; members?: PropertySignature[] }) {
    super(_DECLARATION_INTERFACE);

    this.name = new Identifier(p.name);
    this.members = p.members || [];
  }
}
