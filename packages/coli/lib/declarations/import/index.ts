import { ImportDefaultSpecifier } from "./import-default.specifier";
import { BaseImportSpecifier } from "./import-specifier.base";

export * from "./import-specifier.base";
export * from "./import.specifier";
export * from "./import-default.specifier";

export class ImportDeclaration {
  /**
   * import specifiers; both default and imports
   */
  specifiers: BaseImportSpecifier[];

  /**
   * source of the import being held from. e.g. "module-a"
   */
  source: string;

  get defaultImport(): ImportDefaultSpecifier | undefined {
    throw "not implemented";
  }

  constructor(params: { specifiers?: BaseImportSpecifier[]; source: string }) {
    if (params.specifiers) {
      this.specifiers = params.specifiers;
    }
    this.source = params.source;
  }

  public exportAs() {
    // const { default: _default, source: _from, _import } = this;
    // const importIsNotEmpty = _import != null && _import.join("") !== "";
    // let code = "import";
    // _default != null && (code += ` ${_default}`);
    // if (importIsNotEmpty && _default != null) {
    //   code += `,`;
    // }
    // importIsNotEmpty && (code += ` { ${_import.join(", ")} }`);
    // _from != null && (code += ` from "${_from}"`);
    // return code;
  }
}