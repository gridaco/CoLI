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

  import(_import: HandyImport): this {
    this.m_import = handyImportToImportSpecifier(_import);
    return this;
  }

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
