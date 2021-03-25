import { _EXPRESSION_COMMENT } from "../_internal/constants/expressions-name";
import { Expression } from "./expression.base";

type CommentStyleEnum = "single-line" | "multi-line";

export class CommentExpression extends Expression {
  private style: CommentStyleEnum;
  private content: string;

  constructor({ style, content }) {
    super(_EXPRESSION_COMMENT);
    this.style = style;
    this.content = content;
  }

  public exportAs() {}

  public exportAsTypeScript() {
    let code = "";

    if (this.style === "single-line") {
      code += `// ${this.content}`;
    } else {
      code += "/**\n";
      this.content.split("\n").map((cmt) => (code += `* ${cmt}\n`));
      code += "*/";
    }

    return code;
  }
}
