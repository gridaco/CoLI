import { Class } from "../../builders/class";
import { File } from "../../builders/file";

// TODO
export class DartFile extends File {
  imports: Array<string>;
  import(module: string): this {
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
