import {
  ObjectLiteralExpression,
  Identifier,
  TypeReference,
  StringLiteral,
  PropertyAssignment,
} from "coli";
import { stringfy } from "../stringfy";

test("object literal expression with properties", () => {
  const datafieldid = new Identifier("data");

  const objdec = new ObjectLiteralExpression({
    properties: [
      new PropertyAssignment({
        name: datafieldid,
        initializer: new StringLiteral("data value"),
      }),
    ],
  });

  const src = stringfy(objdec, {
    language: "typescript",
  });

  expect(src).toBe(`{
  data: "data value"
}`);
});
