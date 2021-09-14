import {
  Import,
  ImportDeclaration,
  ImportDefaultSpecifier,
  ImportSpecifier,
} from "coli";
import { stringfy } from "@coli.codes/export-string";

// import styled, { utils as u } from "@emotion/styled"
// plain
const importDec = new ImportDeclaration({
  specifiers: [
    new ImportDefaultSpecifier({
      local: "styled",
    }),
    new ImportSpecifier({
      import: "utils",
      local: "u",
    }),
    new ImportSpecifier({
      import: "a",
      local: "b",
    }),
  ],
  source: "@emotion/styled",
});

test("import declaration", () => {
  expect(stringfy(importDec)).toBe(
    `import styled, { u as utils, b as a } from "@emotion/styled";\n`
  );
});
