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
 * 2. `new Import().import(...).from(...)`
 * 3. `new Import().import(...).from(...).make()`
 */
export class Import extends ColiBuilder<ImportDeclaration> {
  private source: string;
  private default: ImportDefaultSpecifier;
  private m_import: ImportSpecifier;
  private imports: ImportSpecifier[] = [];
  static declare(source: string): ImportDeclaration {
    return new ImportDeclaration({
      source: source,
    });
  }

  from(source: string): this {
    this.source = source;
    return this;
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
  import(_import: HandyImport): this {
    this.m_import = handyImportToImportSpecifier(_import);
    return this;
  }

  /**
   * add more import. same as `.import(...)`
   * @param _import
   * @returns
   */
  and(..._import: HandyImport[]): this {
    _import.forEach((e) => {
      this.imports.push(handyImportToImportSpecifier(e));
    });
    return this;
  }

  private get specifiers(): BaseImportSpecifier[] {
    const final = [];
    this.default && final.push(this.default);
    this.m_import && final.push(this.m_import);
    final.push(...this.imports);
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
