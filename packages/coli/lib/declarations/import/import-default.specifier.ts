import { BaseImportSpecifier } from "./import-specifier.base";

export class ImportDefaultSpecifier extends BaseImportSpecifier {
  local: {
    name: string;
  };

  /**
   * ImportDefault does only requires the name of the import, which is named "local"
   * @param params
   */
  constructor(params: { local: string }) {
    super("ImportDefaultSpecifier");

    // set local.name with local
    this.local = {
      name: params.local,
    };
  }
}
