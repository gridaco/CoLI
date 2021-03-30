import { Import } from "coli/lib";
import {
  ImportDeclaration,
  ImportDefaultSpecifier,
  ImportSpecifier,
} from "coli/lib/declarations/import";
import { stringfy } from "../../packages/export-string";

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
  ],
  source: "@motion/styled",
});

// with builders
const simpleImport = new Import()
  .importDefault("styled")
  .and({ import: "utils", as: "sutil" })
  .from("@emotion/styled")
  .make();

console.log(
  stringfy(simpleImport, {
    language: "typescript",
  })
);
