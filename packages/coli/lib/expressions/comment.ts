import { _EXPRESSION_COMMENT } from "../_internal/constants/expressions-name";
import { Expression } from "./expression.base";
import { stringfy } from "../../../export-string/index";
type CommentStyleEnum = "single-line" | "multi-line";

export class CommentExpression extends Expression {
  private style: CommentStyleEnum;
  private content: string;

  constructor({ style, content }) {
    super(_EXPRESSION_COMMENT);
    this.style = style;
    this.content = content;
  }
}
