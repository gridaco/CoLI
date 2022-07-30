import { BooleanKeyword, Identifier } from "@coli.codes/core";
import { stringfy } from "../lib";

const id = new Identifier("add_values");

test("identifer", () => {
  expect(stringfy(id)).toBe(`add_values`);
});

const id_with_type = new Identifier("add_values", {
  optional: true,
  typeAnnotation: new BooleanKeyword(),
});

test("identifer with types", () => {
  expect(stringfy(id_with_type)).toBe(`add_values?: boolean`);
});
