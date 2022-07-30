import { astfmt_import_specifier } from "../lib/formatters/import-specifier";
import { FormattingToken, SyntaxKind } from "../lib/tokens";
import { ImportSpecifier } from "@coli.codes/core";
test("import specifier", () => {
  const c = new ImportSpecifier({
    import: "a",
    local: "b",
  });
  expect(astfmt_import_specifier(c)).toStrictEqual([
    "b",
    new FormattingToken(" "),
    new FormattingToken(SyntaxKind.AsKeyword),
    new FormattingToken(" "),
    "a",
  ]);
});
