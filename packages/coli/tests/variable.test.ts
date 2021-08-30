import { Literal, Types, VariableDeclaration } from "coli";
import { stringfy } from "@coli.codes/export-string";
import { _internal } from "coli";
/**
 * @test VariableDeclaration
 */

const notInitValue = new VariableDeclaration("notInitValue", {
  kind: _internal.SyntaxKind.ConstKeyword,
});

// const notInitValue : any;
console.log(stringfy(notInitValue, { language: "typescript" }));

const initValue = new VariableDeclaration("initValue", {
  kind: _internal.SyntaxKind.ConstKeyword,
  initializer: new Literal(1),
});

// const initValue : any = 1;
console.log(stringfy(initValue, { language: "typescript" }));

const initType = new VariableDeclaration("initType", {
  kind: _internal.SyntaxKind.ConstKeyword,
  type: Types.number,
});

// const initType : number;
console.log(stringfy(initType, { language: "typescript" }));
