import {
  ObjectLiteralExpression,
  Identifier,
  TypeReference,
  StringLiteral,
  PropertyAssignment,
} from "@coli.codes/core";
import { format } from "../lib/format";
import { astfmt_object_literal_expression } from "../lib/formatters";

test("object literal expression with many properties", () => {
  const properties = [0, 1].map((d) => {
    const datafieldid = new Identifier("_" + d);
    return new PropertyAssignment({
      name: datafieldid,
      initializer: new StringLiteral(String(d)),
    });
  });

  const objdec = new ObjectLiteralExpression({
    properties: properties,
  });

  const ast = astfmt_object_literal_expression(objdec);

  expect(ast).toBe([]);
});
