import { VariableDeclaration, ast, _internal } from "coli";
import { stringfy } from "@coli.codes/export-string";

const messageValue = new ast.Literal("hello world");
const messageVariable = new VariableDeclaration("message", {
  kind: _internal.SyntaxKind.ConstKeyword,
  initializer: messageValue,
});

// >> const message = "hello world"
console.log(
  stringfy(messageVariable, {
    language: "typescript",
  })
);
