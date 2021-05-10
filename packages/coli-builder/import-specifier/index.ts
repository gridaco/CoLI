import { ImportDefaultSpecifier, ImportSpecifier } from "@coli.codes/core";

export class ImportSpecifierBuilder {
  static default(name: string): ImportDefaultSpecifier {
    return new ImportDefaultSpecifier({
      local: name,
    });
  }

  static new(name: string): ImportSpecifier {
    return new ImportSpecifier({
      import: name,
    });
  }

  static newNamed(params: { name: string; as: string }): ImportSpecifier {
    return new ImportSpecifier({
      import: params.name,
      local: params.as,
    });
  }
}
