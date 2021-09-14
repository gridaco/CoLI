import { ExportAssignment, Identifier } from "@coli.codes/core";
import { stringfy } from "..";

const export_function = new ExportAssignment(new Identifier("add_values"));

test("export assignment", () => {
  expect(stringfy(export_function)).toBe(`export default add_values;`);
});
