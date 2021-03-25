import {
  _DECLARATION_FUNCTION,
  _DECLARATION_IMPORT,
  _DECLARATION_VARIABLE,
} from "../_internal/constants/declarations-name";
import {
  _EXPRESSION_AWAIT,
  _EXPRESSION_CALL,
  _EXPRESSION_COMMENT,
} from "../_internal/constants/expressions-name";
import {
  _SPEFICIER_DEFAULT_IMPORT,
  _SPEFICIER_IMPORT,
} from "../_internal/constants/specifiers-name";
import {
  _STATEMENT_BLOCK,
  _STATEMENT_EXPRESSION,
} from "../_internal/constants/statements-name";

// declrarations
export type ColiDeclarationType =
  | typeof _DECLARATION_FUNCTION
  | typeof _DECLARATION_IMPORT
  | typeof _DECLARATION_VARIABLE;

// expressions
export type ColiExpressionType =
  | typeof _EXPRESSION_CALL
  | typeof _EXPRESSION_COMMENT
  | typeof _EXPRESSION_AWAIT;

// specifiers
export type ColiSpecifierType =
  | typeof _SPEFICIER_IMPORT
  | typeof _SPEFICIER_DEFAULT_IMPORT;

// statements
export type ColiStatementType =
  | typeof _STATEMENT_EXPRESSION
  | typeof _STATEMENT_BLOCK;

export type ColiObjectType =
  | ColiDeclarationType
  | ColiExpressionType
  | ColiSpecifierType
  | ColiStatementType;

export class ColiObject {
  constructor(readonly type: ColiObjectType) {}
}
