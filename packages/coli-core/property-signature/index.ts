import { Identifier } from "../ast";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { ColiObject } from "../_abstract";
import { StringLiteral } from "../literal";
import { _SIGNATURE_PROPERTY } from "../_internal";
import { QuestionToken } from "../question-token";
import { TypeLike } from "../types";

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
   * type fo the property
   */
  type: TypeLike;

  /**
   * rather question token is provided.
   * ```ts
   * interface Example {
   *    maybe?: "value" | undefined, // yes - `SyntaxKind.QuestionToken`
   *    sure: "value" // yes - `undefined`
   * }
   * ```
   */
  questionToken?: QuestionToken;

  constructor(p: {
    name: Identifier | StringLiteral;
    type?: TypeLike;
    /** rather if this property is optional */
    optional?: boolean;
  }) {
    super(_SIGNATURE_PROPERTY);
    this.name = p.name;
    this.type = p.type;
    this.questionToken = p.optional ? SyntaxKind.QuestionToken : undefined;
  }
}
