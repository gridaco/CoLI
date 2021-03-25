import { BaseImportSpecifier } from "./import-specifier.base";

export class ImportDefaultSpecifier extends BaseImportSpecifier {
  local: {
    name: string;
  };

  constructor() {
    super("ImportDefaultSpecifier");
  }
}
