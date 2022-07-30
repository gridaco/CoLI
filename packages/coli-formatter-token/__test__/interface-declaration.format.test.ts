import {
  BooleanKeyword,
  Identifier,
  InterfaceDeclaration,
  LiteralType,
  NumberKeyword,
  PropertySignature,
  StringLiteral,
  UnionType,
} from "@coli.codes/core";
import { format } from "../lib/format";

test("format ts empty interface", () => {
  const dec = new InterfaceDeclaration({
    name: "Test",
  });
  const ast = format(dec);
  expect(ast).toBe([]);
});

test("format ts members interface", () => {
  const dec = new InterfaceDeclaration({
    name: "Test",
    members: [
      new PropertySignature({
        name: new Identifier("a"),
      }),
    ],
  });
  const src = format(dec);
  expect(src).toBe(`interface Test {
  a
}`);
});

test("stringfy ts typed members interface", () => {
  const dec = new InterfaceDeclaration({
    name: "Test",
    members: [
      new PropertySignature({
        name: new Identifier("a"),
        type: new LiteralType(new StringLiteral("a")),
      }),
      new PropertySignature({
        name: new Identifier("disabled"),
        type: new BooleanKeyword(),
      }),
      new PropertySignature({
        name: new Identifier("variant"),
        type: new UnionType({
          types: [
            new LiteralType(new StringLiteral("bold")),
            new LiteralType(new StringLiteral("light")),
            new LiteralType(new StringLiteral("regular")),
            new NumberKeyword(),
          ],
        }),
      }),
    ],
  });
  const src = format(dec);
  expect(src).toBe(`interface Test {
  a: "a"
  disabled: boolean
  variant: "bold" | "light" | "regular" | number
}`);
});
