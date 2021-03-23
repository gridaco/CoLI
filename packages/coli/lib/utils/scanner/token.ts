import { SyntacticEntity } from "../../ast";

const NO_PRECEDENCE: number = 0;
const ASSIGNMENT_PRECEDENCE: number = 1;
const CASCADE_PRECEDENCE: number = 2;
const CONDITIONAL_PRECEDENCE: number = 3;
const IF_NULL_PRECEDENCE: number = 4;
const LOGICAL_OR_PRECEDENCE: number = 5;
const LOGICAL_AND_PRECEDENCE: number = 6;
const EQUALITY_PRECEDENCE: number = 7;
const RELATIONAL_PRECEDENCE: number = 8;
const BITWISE_OR_PRECEDENCE: number = 9;
const BITWISE_XOR_PRECEDENCE: number = 10;
const BITWISE_AND_PRECEDENCE: number = 11;
const SHIFT_PRECEDENCE: number = 12;
const ADDITIVE_PRECEDENCE: number = 13;
const MULTIPLICATIVE_PRECEDENCE: number = 14;
const PREFIX_PRECEDENCE: number = 15;
const POSTFIX_PRECEDENCE: number = 16;
const SELECTOR_PRECEDENCE: number = 17;

export abstract class Token implements SyntacticEntity {
  abstract end: number;
  abstract length: number;
  abstract offset: number;

  /**
   * Return the lexeme that represents this token.
   *
   * For [StringToken]s the [lexeme] includes the quotes, explicit escapes, etc.
   */
  abstract lexeme: string;

  /**
   * Return the next token in the token stream.
   */
  abstract next: Token;
}

export class TokenClass {
  /**
   * The name of the token class.
   */
  readonly name: string;

  /**
   * The precedence of tokens of this class, or `0` if the such tokens do not
   * represent an operator.
   */
  readonly precedence?: number;

  constructor(name: string, precedence?: number) {
    this.name = name;
    this.precedence = precedence;
  }

  /**
   * A value used to indicate that the token type is not part of any specific
   * class of token.
   */
  static NO_CLASS: TokenClass = new TokenClass("NO_CLASS");

  /**
   * A value used to indicate that the token type is an additive operator.
   */
  static ADDITIVE_OPERATOR: TokenClass = new TokenClass(
    "ADDITIVE_OPERATOR",
    ADDITIVE_PRECEDENCE
  );
}
