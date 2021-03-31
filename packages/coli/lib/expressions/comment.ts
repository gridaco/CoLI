import { _EXPRESSION_COMMENT } from "../_internal/node-name/expressions-name";
import { Expression } from "./expression.base";
import { stringfy } from "../../../export-string/index";
type CommentStyleEnum = "single-line" | "multi-line";

export class CommentExpression extends Expression {
  readonly style: CommentStyleEnum;
  readonly content: string;

  constructor(params: { style: CommentStyleEnum; content: string }) {
    super(_EXPRESSION_COMMENT);
    this.style = params.style;
    this.content = params.content;
  }
}
