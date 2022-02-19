import { ObjectLiteralExpression } from "..";
import { ColiObject, ColiLiteralType } from "../_abstract";
import { SyntaxKind } from "../_internal";

/* @internal */ type LiteralValueAcceptableType =
  | string
  | boolean
  | null
  | number
  | RegExp;

export class Literal extends ColiObject {
  constructor(
    kind: ColiLiteralType,
    readonly value: LiteralValueAcceptableType
  ) {
    super(kind);
  }

  static from(
    value: LiteralValueAcceptableType | any
  ): Literal | ObjectLiteralExpression {
    switch (typeof value) {
      case "string":
        return new Literal(SyntaxKind.StringLiteral, value);
      case "number":
        return new Literal(SyntaxKind.NumericLiteral, value);
      case "boolean":
      // return new Literal(SyntaxKind.Boolean, value);
      case "object":
        return new ObjectLiteralExpression({
          properties: value,
        });
      case "undefined":
        return undefined;
      default:
        throw new Error(
          `Cannot create Literal from '${value}' typeof ${typeof value}`
        );
    }
  }
}
