import { stringfy } from "@coli.codes/export-string";
import {
  ImportDeclaration,
  ImportDefaultSpecifier,
  ImportSpecifier,
} from "coli";

const importOther = new ImportDeclaration({
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

// impoty styled, { utils as u } from '@emotion/styled'
console.log(stringfy(importOther, { language: "typescript" }));

const importDefault = new ImportDeclaration({
  specifiers: [
    new ImportDefaultSpecifier({
      local: "styled",
    }),
  ],
  source: "@motion/styled",
});

// import styled from "@emotion/styled"
console.log(stringfy(importDefault, { language: "typescript" }));

const importOnlyOther = new ImportDeclaration({
  specifiers: [
    new ImportSpecifier({
      import: "utils",
      local: "utils",
    }),
    new ImportSpecifier({
      import: "helpers",
      local: "helpers",
    }),
  ],
  source: "@motion/styled",
});

// import { utils, helpers } from "@emotion/styled"
console.log(stringfy(importOnlyOther, { language: "typescript" }));

const importOnlyOther2 = new ImportDeclaration({
  specifiers: [
    new ImportSpecifier({
      import: "utils",
      local: "u",
    }),
    new ImportSpecifier({
      import: "helpers",
      local: "hp",
    }),
  ],
  source: "@motion/styled",
});

// import { utils as u, helpers as hp } from "@emotion/styled"
console.log(stringfy(importOnlyOther2, { language: "typescript" }));
