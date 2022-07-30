import {
  SingleLineCommentTrivia,
  MultilineCommentTrivia,
} from "@coli.codes/core";
import { stringfy } from "../lib";

test("single line comment trivia", () => {
  const single_line_comment = new SingleLineCommentTrivia({
    text: "This is a single line comment",
  });
  expect(stringfy(single_line_comment)).toBe(
    `// This is a single line comment`
  );
});

test("multi line comment trivia", () => {
  const multi_line_comment = new MultilineCommentTrivia({
    text: "This is a multi-line comment.\nand this is the second line.",
  });
  expect(stringfy(multi_line_comment)).toBe(
    `/**\n * This is a multi-line comment.\n * and this is the second line.\n */`
  );
});
