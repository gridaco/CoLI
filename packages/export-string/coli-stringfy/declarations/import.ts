import { Type } from "coli/lib";
import {
  ImportDefaultSpecifier,
  ImportSpecifier,
} from "coli/lib/declarations/import";
interface ImportDeclaration {
  type: "ImportDeclaration";
  leadingComment: Array<any>;
  tralingComments: Array<any>;
  source: string;
  specifiers: Array<ImportDefaultSpecifier | ImportSpecifier>;
}

function Typescript(coli: ImportDeclaration) {
  let code = "import ";
  let importAttribute = [];
  let specifier = [];

  coli.specifiers.map((i) => {
    if (i instanceof ImportDefaultSpecifier) {
      importAttribute.push(i.local.name);
    } else if (i instanceof ImportSpecifier) {
      if (i.imported.name === i.local.name) {
        specifier.push(`${i.imported.name}`);
      } else {
        specifier.push(`${i.imported.name} as ${i.local.name}`);
      }
    }
  });

  if (specifier.length != 0) {
    importAttribute.push(`{ ${specifier.join(", ")} }`);
  }

  code += `${importAttribute.join(", ")} from "${coli.source}"`;

  code += ";";
  return code;
}

function Python(coli: ImportDeclaration) {
  let code = "";

  code += ";";
  return code;
}

function Dart(coli: ImportDeclaration) {
  let code = "";

  code += ";";
  return code;
}

export const StringfyImport = {
  Typescript,
  Python,
  Dart,
};
