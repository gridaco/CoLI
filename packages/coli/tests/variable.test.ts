import { VariableStatement } from "../lib/statements/variable";
import { stringfy } from "../../export-string";
import { Types } from "../lib";

/**
 * @test VariableDeclaration
 */

const notInitValue = new VariableStatement("notInitValue", {
  kind: "const",
});

// const notInitValue : any;
console.log(stringfy(notInitValue, { language: "typescript" }));

const initValue = new VariableStatement("initValue", {
  kind: "const",
  value: 1,
});

// const initValue : any = 1;
console.log(stringfy(initValue, { language: "typescript" }));

const initType = new VariableStatement("initType", {
  kind: "const",
  variableType: Types.number,
});

// const initType : number;
console.log(stringfy(initType, { language: "typescript" }));
