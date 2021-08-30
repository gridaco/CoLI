import { InterfaceDeclaration } from "@coli.codes/core";
import {} from "../core/import-declaration";
test("", () => {
  const dec = new InterfaceDeclaration("Test");
  expect(dec).toBe("");
});
