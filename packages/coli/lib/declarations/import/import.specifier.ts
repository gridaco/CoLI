import { BaseImportSpecifier } from "./import-specifier.base";

export class ImportSpecifier extends BaseImportSpecifier {
  imported: {
    name: string;
  };
}
