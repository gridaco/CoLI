import {
  ObjectLiteralExpression,
  Identifier,
  TypeReference,
  StringLiteral,
  PropertyAssignment,
} from "coli";
import { strfy_object_literal_expression } from "../lib/core";

test("object literal expression with one properties", () => {
  const datafieldid = new Identifier("data");

  const objdec = new ObjectLiteralExpression({
    properties: [
      new PropertyAssignment({
        name: datafieldid,
        initializer: new StringLiteral("data value"),
      }),
    ],
  });

  const src = strfy_object_literal_expression(objdec);

  expect(src).toBe(`{
\tdata: "data value"
}`);
});

test("object literal expression with many properties", () => {
  const properties = [1, 2, 3, 4, 5, 6].map((d) => {
    const datafieldid = new Identifier("data" + d);
    return new PropertyAssignment({
      name: datafieldid,
      initializer: new StringLiteral(d + ":" + "data value"),
    });
  });

  const objdec = new ObjectLiteralExpression({
    properties: properties,
  });

  const src = strfy_object_literal_expression(objdec);

  expect(src).toBe(`{
\tdata1: "1:data value",
\tdata2: "2:data value",
\tdata3: "3:data value",
\tdata4: "4:data value",
\tdata5: "5:data value",
\tdata6: "6:data value"
}`);
});
