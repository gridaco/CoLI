import { VariableDeclaration, ast } from "coli";
import { stringfy } from "@coli.codes/export-string";

const messageValue = new ast.Literal("hello world");
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
