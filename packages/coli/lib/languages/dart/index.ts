import { Class } from "../../builders/class";
import { File } from "../../file";
import { ImportDeclaration } from "../../declarations/import";

// TODO
export class DartFile extends File {
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
