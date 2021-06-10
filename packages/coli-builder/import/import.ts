import {
  ColiBuilder,
  BaseImportSpecifier,
  ImportDeclaration,
  ImportDefaultSpecifier,
  ImportSpecifier,
} from "@coli.codes/core";

/**
 * A Import Builder with builder pattern.
 *
 * **Usage**
 *
 * 1. `Import.declare(...)`
 * 2. `new Import().imports(...).from(...)`
 * 3. `new Import().imports(...).from(...).make()`
 */
export class Import extends ColiBuilder<ImportDeclaration> {
  private source: string;
  private default: ImportDefaultSpecifier;
  private m_import: ImportSpecifier;
  private m_imports: ImportSpecifier[] = [];
  static declare(source: string): ImportDeclaration {
    return new ImportDeclaration({
      source: source,
    });
  }

  /**
   * set single import default specifier. calling this multiple times will override previous call effect.
   *
   * e.g.
   *
   * 1. `import a from "a"`
   * 2. ~~import `{ a }` from "a"~~ **(NOT THIS)**
   * @param local
   * @returns
   */
  importDefault(local: string): this {
    this.default = new ImportDefaultSpecifier({
      local: local,
    });
    return this;
  }

  // region `imports().from()` builder pattern alias
  // IMPORTANT - use name of `import` as a function name will cause import rejection error on some specific platforms. thus, we are declaring the function name as `imports` with additional `s` - refer issue: https://github.com/bridgedxyz/CoLI/issues/11
  /**
   * adds `{?}` import
   *
   * e.g.
   *
   * 1. import `{ a }` from "a"
   * 2. ~~import a from "a"~~ **(NOT THIS)**
   * @param _import
   * @returns
   */
  imports(_import: HandyImport): this {
    this.m_import = handyImportToImportSpecifier(_import);
    return this;
  }

  from(source: string): this {
    this.source = source;
    return this;
  }
  // endregion `imports().from()` builder pattern alias

  /**
   * add more import. same as `.import(...)`
   * @param _import
   * @returns
   */
  and(..._import: HandyImport[]): this {
    _import.forEach((e) => {
      this.m_imports.push(handyImportToImportSpecifier(e));
    });
    return this;
  }

  private get specifiers(): BaseImportSpecifier[] {
    const final = [];
    this.default && final.push(this.default);
    this.m_import && final.push(this.m_import);
    final.push(...this.m_imports);
    return final;
  }

  __finalize(): ImportDeclaration {
    return new ImportDeclaration({
      specifiers: this.specifiers,
      source: this.source,
    });
  }
}

/**
 * specifies import
 * e.g.
 *
 * 1. import `{ a }` from "a"
 * 2. import `{a as _}` from "a"
 */
type HandyImport = { import: string; as?: string } | string;

function handyImportToImportSpecifier(_import: HandyImport): ImportSpecifier {
  if (typeof _import == "string") {
    return new ImportSpecifier({
      import: _import,
    });
  } else if (typeof _import == "object") {
    return new ImportSpecifier(_import);
  }
}
