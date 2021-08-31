import { ColiBlock } from "../builder/block";
import { ColiBuilder } from "../builder/builder";
import { CommentExpression } from "../expressions/comment";
import { COLI_WILDCARD_KEY } from "../_wildcard";
import {
  _ASSIGNMENT_EXPORT,
  _ASSIGNMENT_PROPERTY,
  _ASSIGNMENT_SPREAD,
  _LITERAL_BIGINT,
  _LITERAL_NUMERIC,
  _LITERAL_STRING,
  _LITERAL_TEMPLATE,
  _LITERAL_TYPE,
  _NODE_IDENTIFIER,
  _NODE_PROGRAM,
  _SIGNATURE_PROPERTY,
  _TYPE_REFERENCE,
} from "../_internal/node-name";
import {
  _DECLARATION_FUNCTION,
  _DECLARATION_IMPORT,
  _DECLARATION_INTERFACE,
  _DECLARATION_TYPE_ALIAS,
  _DECLARATION_VARIABLE,
} from "../_internal/node-name/declarations-name";
import {
  _ELEMENT_JSX,
  _ELEMENT_JSX_CLOSING,
  _ELEMENT_JSX_OPENING,
  _ELEMENT_JSX_SELF_CLOSING,
} from "../_internal/node-name/elements-name";
import {
  _EXPRESSION_AWAIT,
  _EXPRESSION_CALL,
  _EXPRESSION_COMMENT,
  _EXPRESSION_JSX,
  _EXPRESSION_LITERAL_OBJECT,
  _EXPRESSION_PROPERTY_ACCESS,
  _EXPRESSION_TAGGED_TEMPLATE,
} from "../_internal/node-name/expressions-name";
import {
  _TYPE_FUNCTION,
  _TYPE_ARRAY,
  _TYPE_UNION,
  _TYPE_TEMPLATE_LITERAL,
  _TYPE_MAPPED,
  _TYPE_LITERAL,
} from "../_internal/node-name/typelike-name";
import { _JSX_ATTRIBUTE, _JSX_TEXT } from "../_internal/node-name/jsx-names";
import {
  _SPECIFIER_DEFAULT_IMPORT,
  _SPECIFIER_IMPORT,
} from "../_internal/node-name/specifiers-name";
import {
  _STATEMENT_BLOCK,
  _STATEMENT_EXPRESSION,
  _STATEMENT_RETURN,
  _STATEMENT_VARIABLE,
} from "../_internal/node-name/statements-name";
import { SyntaxKind } from "../ast/syntax-kind";

// assignments
export type ColiAssignmentType =
  | typeof _ASSIGNMENT_EXPORT
  | typeof _ASSIGNMENT_PROPERTY
  | typeof _ASSIGNMENT_SPREAD;

// typelike
export type ColiTypelikeType =
  | typeof _TYPE_FUNCTION
  | typeof _TYPE_ARRAY
  | typeof _TYPE_UNION
  | typeof _TYPE_TEMPLATE_LITERAL
  | typeof _TYPE_MAPPED
  | typeof _TYPE_LITERAL;

// declrarations
export type ColiDeclarationType =
  | typeof _DECLARATION_FUNCTION
  | typeof _DECLARATION_IMPORT
  | typeof _DECLARATION_VARIABLE
  | typeof _DECLARATION_INTERFACE
  | typeof _DECLARATION_TYPE_ALIAS;

// signatures
export type ColiSignatureType = typeof _SIGNATURE_PROPERTY;

// expressions
export type ColiExpressionType =
  | typeof _EXPRESSION_CALL
  | typeof _EXPRESSION_COMMENT
  | typeof _EXPRESSION_AWAIT
  | typeof _EXPRESSION_PROPERTY_ACCESS
  | typeof _EXPRESSION_LITERAL_OBJECT
  | typeof _EXPRESSION_TAGGED_TEMPLATE
  | typeof _EXPRESSION_JSX;

// specifiers
export type ColiSpecifierType =
  | typeof _SPECIFIER_IMPORT
  | typeof _SPECIFIER_DEFAULT_IMPORT;

// statements
export type ColiStatementType =
  | typeof _STATEMENT_EXPRESSION
  | typeof _STATEMENT_BLOCK
  | typeof _STATEMENT_RETURN
  | typeof _STATEMENT_VARIABLE;

// elements
export type ColiJsxElementType =
  | typeof _ELEMENT_JSX
  | typeof _ELEMENT_JSX_OPENING
  | typeof _ELEMENT_JSX_CLOSING
  | typeof _ELEMENT_JSX_SELF_CLOSING;

export type ColiLiteralType =
  | typeof _LITERAL_STRING
  | typeof _LITERAL_TYPE
  | typeof _LITERAL_BIGINT
  | typeof _LITERAL_TEMPLATE
  | typeof _LITERAL_NUMERIC;

export type ColiBaseNodeType =
  | ColiLiteralType
  | typeof _NODE_IDENTIFIER
  | typeof _NODE_PROGRAM;

export type ColiOtherJsxType = typeof _JSX_ATTRIBUTE | typeof _JSX_TEXT;

export type ColiTypeKeyword =
  | SyntaxKind.ObjectKeyword
  | SyntaxKind.NumberKeyword
  | SyntaxKind.StringKeyword
  | SyntaxKind.AnyKeyword
  | SyntaxKind.BooleanKeyword
  | SyntaxKind.VoidKeyword
  | SyntaxKind.UndefinedKeyword
  | SyntaxKind.NullKeyword
  | SyntaxKind.NeverKeyword
  | SyntaxKind.TrueKeyword
  | SyntaxKind.FalseKeyword;

export type ColiObjectType =
  | ColiBaseNodeType
  | typeof COLI_WILDCARD_KEY
  | ColiAssignmentType
  | ColiTypelikeType
  | ColiDeclarationType
  | ColiExpressionType
  | ColiSignatureType
  | ColiSpecifierType
  | ColiStatementType
  | ColiOtherJsxType
  | ColiJsxElementType
  | ColiTypeKeyword
  /* no familly */
  | typeof _TYPE_REFERENCE
  /* no familly */
  | typeof SyntaxKind.Parameter;

export type ColiObjectKind<T extends ColiObject> = T | ColiBuilder<T>;

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

  constructor(readonly __type: ColiObjectType) {}
}

export type ColiInterpretable = ColiObject | ColiBlock | Array<ColiBlock>;
