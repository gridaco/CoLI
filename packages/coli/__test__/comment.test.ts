import { stringfy } from "@coli.codes/export-string";
import { SingleLineCommentTrivia, MultilineCommentTrivia } from "coli";

const singleComment = new SingleLineCommentTrivia({
  text: "single line comment",
});

// single line comment
console.log(stringfy(singleComment, { language: "typescript" }));

const multiComment = new MultilineCommentTrivia({
  text: "multiline\ncontents",
});

/**
 * multiline
 * contents
 */
console.log(stringfy(multiComment, { language: "typescript" }));
