import { BaseImportSpecifier } from "./import-specifier.base";

export class ImportSpecifier extends BaseImportSpecifier {
  /**
   * if no local name specified, ast specifier takes the same import name as local.
   * i.e.
   * 1. `import { a as b} from "."` - {import:a, local:b}
   * 2. `import { a } form "."` - {import:a, local:a}
   * @param params
   */
  constructor(params: { import: string; local?: string }) {
    super("ImportSpecifier");

    // set import as imported.name
    this.imported = {
      name: params.import,
    };

    // set local as local.name
    this.local = {
      name: params.local ?? params.import,
    };
  }

  imported: {
    name: string;
  };
}
