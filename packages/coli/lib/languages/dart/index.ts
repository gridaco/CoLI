import { Class } from "../../builders/class";
import { SourceFile } from "../../file";
import { ImportDeclaration } from "../../declarations/import";

// TODO
export class DartFile extends SourceFile {
  imports: Array<ImportDeclaration>;
  import(module: ImportDeclaration): this {
    this.imports.push(module);
    return this;
  }

  withClass(_class: Class): this {
    return this;
  }

  build(): string {
    return ``;
  }
}
