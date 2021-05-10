import { ast, Types, VariableDeclaration } from "coli";
import { stringfy } from "@coli.codes/export-string";

/**
 * @test VariableDeclaration
 */

const notInitValue = new VariableDeclaration("notInitValue", {
  kind: "const",
});

// const notInitValue : any;
console.log(stringfy(notInitValue, { language: "typescript" }));

const initValue = new VariableDeclaration("initValue", {
  kind: "const",
  initializer: new ast.Literal(1),
});

// const initValue : any = 1;
console.log(stringfy(initValue, { language: "typescript" }));

const initType = new VariableDeclaration("initType", {
  kind: "const",
  type: Types.number,
});

// const initType : number;
console.log(stringfy(initType, { language: "typescript" }));
