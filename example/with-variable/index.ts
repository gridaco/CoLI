import { VariableDeclaration } from "coli/lib/declarations/variable";
import { Literal } from "coli/lib/ast";
import { stringfy } from "@coli/export-string";

const messageValue = new Literal("hello world");
const messageVariable = new VariableDeclaration("message", {
  kind: "const",
  initializer: messageValue,
});

// >> const message = "hello world"
console.log(
  stringfy(messageVariable, {
    language: "typescript",
  })
);
