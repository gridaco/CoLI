import { Class } from "../../builders/class";
import { File } from "../../builders/file";

// TODO
export class DartFile extends File {
  imports: Array<string>;
  addImport(module: string): this {
    this.imports.push(module);
    return this;
  }

  addClass(_class: Class): this {
    return this;
  }

  build(): string {
    return ``;
  }
}
