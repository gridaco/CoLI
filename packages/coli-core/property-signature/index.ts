import { Identifier } from "../ast";
import { SyntaxKind } from "../ast/syntax-kind";
import { ColiObject } from "../_abstract";
import { StringLiteral } from "../literal";
import { _SIGNATURE_PROPERTY } from "../_internal";

/**
 * What is property signature?
 * ```ts
 * interface A<T, T2=any> extends B{
 *  a: string              // <<---- PropertySignature
 *  b: (a: T, b) => void   // <<---- PropertySignature
 *  "c": "a string literal key property"
 * }
 * ```
 */
export class PropertySignature extends ColiObject {
  /**
   * name is es can be either identifier or string literal. this is only for es. (not supported for other standard languages)
   */
  readonly name: Identifier | StringLiteral;
  readonly kind = SyntaxKind.PropertySignature;

  /**
   * @deprecated not implemented
   * @todo
   */
  type: any;

  /**
   * rather question token is provided.
   * ```ts
   * interface Example {
   *    maybe?: "value" | undefined, // yes - `SyntaxKind.QuestionToken`
   *    sure: "value" // yes - `undefined`
   * }
   * ```
   */
  questionToken?: undefined | SyntaxKind.QuestionToken;

  constructor(p: { name: Identifier | StringLiteral }) {
    super(_SIGNATURE_PROPERTY);
    this.name = p.name;
    this.type = "any"; // TODO:
  }
}
