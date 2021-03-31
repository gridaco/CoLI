import { _SPEFICIER_DEFAULT_IMPORT } from "../../_internal/node-name/specifiers-name";
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
    super(_SPEFICIER_DEFAULT_IMPORT);

    // set local.name with local
    this.local = {
      name: params.local,
    };
  }
}
