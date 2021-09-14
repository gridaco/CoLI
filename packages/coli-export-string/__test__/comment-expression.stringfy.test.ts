import { CommentExpression } from "@coli.codes/core";
import { stringfy } from "..";

const single_line_comment = new CommentExpression({
  style: "single-line",
  content: "This is a single line comment",
});

test("comment expression", () => {
  expect(stringfy(single_line_comment)).toBe(
    `// This is a single line comment`
  );
});
