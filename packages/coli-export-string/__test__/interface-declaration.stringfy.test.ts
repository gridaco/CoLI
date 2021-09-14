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
import { stringfy } from "@coli.codes/export-string";

test("stringfy ts empty interface", () => {
  const dec = new InterfaceDeclaration({
    name: "Test",
  });
  const src = stringfy(dec, {
    language: "typescript",
  });
  expect(src).toBe(`interface Test {}`);
});

// test("stringfy ts members interface", () => {
//   const dec = new InterfaceDeclaration({
//     name: "Test",
//     members: [
//       new PropertySignature({
//         name: new Identifier("a"),
//       }),
//     ],
//   });
//   const src = stringfy(dec, {
//     language: "typescript",
//     formattingOptions: {
//       use: "pritter",
//       parser: "typescript",
//     },
//   });
//   expect(src).toBe(`interface Test {
//   a
// }`);
// });

// test("stringfy ts typed members interface", () => {
//   const dec = new InterfaceDeclaration({
//     name: "Test",
//     members: [
//       new PropertySignature({
//         name: new Identifier("a"),
//         type: new LiteralType(new StringLiteral("a")),
//       }),
//       new PropertySignature({
//         name: new Identifier("disabled"),
//         type: new BooleanKeyword(),
//       }),
//       new PropertySignature({
//         name: new Identifier("variant"),
//         type: new UnionType({
//           types: [
//             new LiteralType(new StringLiteral("bold")),
//             new LiteralType(new StringLiteral("light")),
//             new LiteralType(new StringLiteral("regular")),
//             new NumberKeyword(),
//           ],
//         }),
//       }),
//     ],
//   });
//   const src = stringfy(dec, {
//     language: "typescript",
//     formattingOptions: {
//       use: "pritter",
//       parser: "typescript",
//     },
//   });
//   expect(src).toBe(`interface Test {
//   a: "a"
//   disabled: boolean
//   variant: "bold" | "light" | "regular" | number
// }`);
// });
