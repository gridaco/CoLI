import { ColiBuilder } from "../../builder/builder";
import {
  BaseImportSpecifier,
  ImportDeclaration,
  ImportDefaultSpecifier,
  ImportSpecifier,
} from "../../declarations/import";

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

  importDefault(local: string): this {
    this.default = new ImportDefaultSpecifier({
      local: local,
    });
    return this;
  }

  import(_import: { import: string; as?: string }): this {
    this.m_import = new ImportSpecifier({
      import: _import.import,
      local: _import.as,
    });
    return this;
  }

  and(..._import: { import: string; as?: string }[]): this {
    _import.forEach((e) => {
      this.imports.push(
        new ImportSpecifier({
          import: e.import,
          local: e.as,
        })
      );
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
