import { Class } from "../../class";
import { SourceFile } from "../../file";
import { ImportDeclaration } from "@coli.codes/core";

// TODO
export class DartFile extends SourceFile {
  private readonly _imports: Array<ImportDeclaration> = [];
  imports(module: ImportDeclaration): this {
    this._imports.push(module);
    return this;
  }

  withClass(_class: Class): this {
    return this;
  }

  build(): string {
    return ``;
  }
}
