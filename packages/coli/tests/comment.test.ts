import { stringfy } from "@coli.codes/export-string";
import { CommentExpression } from "coli";

const singleComment = new CommentExpression({
  style: "single-line",
  content: "single line comment",
});

// single line comment
console.log(stringfy(singleComment, { language: "typescript" }));

const multiComment = new CommentExpression({
  style: "multi-line",
  content: "multiline\ncontents",
});

/**
 * multiline
 * contents
 */
console.log(stringfy(multiComment, { language: "typescript" }));
