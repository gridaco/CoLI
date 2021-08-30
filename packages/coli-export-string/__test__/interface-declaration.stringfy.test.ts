import {
  Identifier,
  InterfaceDeclaration,
  PropertySignature,
} from "@coli.codes/core";
import { stringfy } from "@coli.codes/export-string";

test("stringfy ts empty interface", () => {
  const dec = new InterfaceDeclaration({
    name: "Test",
  });
  const src = stringfy(dec, {
    language: "typescript",
  });
  expect(src).toBe(`interface Test {

}`);
});

test("stringfy ts members interface", () => {
  const dec = new InterfaceDeclaration({
    name: "Test",
    members: [
      new PropertySignature({
        name: new Identifier("a"),
      }),
    ],
  });
  const src = stringfy(dec, {
    language: "typescript",
    formattingOptions: {
      use: "pritter",
      parser: "typescript",
    },
  });
  expect(src).toBe(`interface Test {
a: any
}`);
});
