import { _SPEFICIER_IMPORT } from "../../_internal/constants/specifiers-name";
import { BaseImportSpecifier } from "./import-specifier.base";

/**
 * ImportSpecifier.
 * This is for specifiing import, not a default import.
 * i.e. for ES - `import {a as b} from "."` - this is for specifing `a as b`
 * To use default import, use ImportDefaultSpecifier.
 */
export class ImportSpecifier extends BaseImportSpecifier {
  /**
   * if no local name specified, ast specifier takes the same import name as local.
   * i.e.
   * 1. `import { a as b} from "."` - {import:a, local:b}
   * 2. `import { a } form "."` - {import:a, local:a}
   * @param params
   */
  constructor(params: { import: string; local?: string }) {
    super(_SPEFICIER_IMPORT);

    // set import as imported.name
    this.imported = {
      name: params.import,
    };

    // set local as local.name
    this.local = {
      name: params.local ?? params.import,
    };
  }

  /**
   * the name of the imported memeber.
   * e.g. import a as b - `a` stands here. `b` is named local
   */
  imported: {
    name: string;
  };
}
