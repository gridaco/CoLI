import { CommentExpression } from "../expressions/comment";
import {
  _DECLARATION_FUNCTION,
  _DECLARATION_IMPORT,
  _DECLARATION_VARIABLE,
} from "../_internal/constants/declarations-name";
import {
  _ELEMENT_JSX,
  _ELEMENT_JSX_CLOSING,
  _ELEMENT_JSX_OPENING,
} from "../_internal/constants/elements-name";
import {
  _EXPRESSION_AWAIT,
  _EXPRESSION_CALL,
  _EXPRESSION_COMMENT,
  _EXPRESSION_JSX,
  _EXPRESSION_TAGGED_TEMPLATE,
} from "../_internal/constants/expressions-name";
import {
  _SPEFICIER_DEFAULT_IMPORT,
  _SPEFICIER_IMPORT,
} from "../_internal/constants/specifiers-name";
import {
  _STATEMENT_BLOCK,
  _STATEMENT_EXPRESSION,
  _STATEMENT_RETURN,
} from "../_internal/constants/statements-name";

const COLI_WILDCARD_OBJECT = "__WILDCARD__";

// declrarations
export type ColiDeclarationType =
  | typeof _DECLARATION_FUNCTION
  | typeof _DECLARATION_IMPORT
  | typeof _DECLARATION_VARIABLE;

// expressions
export type ColiExpressionType =
  | typeof _EXPRESSION_CALL
  | typeof _EXPRESSION_COMMENT
  | typeof _EXPRESSION_AWAIT
  | typeof _EXPRESSION_TAGGED_TEMPLATE
  | typeof _EXPRESSION_JSX;

// specifiers
export type ColiSpecifierType =
  | typeof _SPEFICIER_IMPORT
  | typeof _SPEFICIER_DEFAULT_IMPORT;

// statements
export type ColiStatementType =
  | typeof _STATEMENT_EXPRESSION
  | typeof _STATEMENT_BLOCK
  | typeof _STATEMENT_RETURN;

// elements
export type ColiElementType =
  | typeof _ELEMENT_JSX
  | typeof _ELEMENT_JSX_OPENING
  | typeof _ELEMENT_JSX_CLOSING;

export type ColiObjectType =
  | typeof COLI_WILDCARD_OBJECT
  | ColiDeclarationType
  | ColiExpressionType
  | ColiSpecifierType
  | ColiStatementType
  | ColiElementType;

export class ColiObject {
  /**
   * e.g.
   * ```
   * // this comment is leading comment of below expression
   * call_expression()
   * ```
   */
  leadingComments: CommentExpression[] = [];

  /**
   * e.g.
   * ```
   * let tralingComments; // this comment is traling comment of previous variable declaration.
   * ```
   */
  tralingComments: CommentExpression[] = [];

  addComment(params: { message: string; position: "above" | "below" }): this {
    switch (params.position) {
      case "above":
      // this.tralingComments.push(new CommentExpression());

      case "below":
      // this.tralingComments.push(new CommentExpression());
    }
    return this;
  }

  constructor(readonly type: ColiObjectType) {}
}
