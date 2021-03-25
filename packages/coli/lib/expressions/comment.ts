type CommentStyleEnum = "single-line" | "multi-line";

export class CommentExpression {
  private style: CommentStyleEnum;
  private content: string;

  constructor({ style, content }) {
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
