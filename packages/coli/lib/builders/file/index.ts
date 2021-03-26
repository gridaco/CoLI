import { ColiBuilder } from "../../builder";
import { Declaration } from "../../declarations/declaration.base";
import { FunctionDeclraration } from "../../declarations/function";
import { ImportDeclaration } from "../../declarations/import";
import { Class } from "../class";

/**
 * interface of general in-project contained file
 */
export interface File {
  /**
   * path of this file relative to root
   */
  path: string;
  /**
   * root directory of the project containing this file. if this is a single file project, it will be .
   */
  root: string;
  /**
   * name of this file such as 'app' or 'app.module'
   */
  name: string;
  /**
   * extension of this file such as 'xcproj' or 'ts' or 'tsx'
   */
  ext: string;
}

export class File extends ColiBuilder {
  constructor(params: { readonly path: string; readonly name: string }) {
    super();
  }

  import(importDeclaration: ImportDeclaration): this {
    return this;
  }

  withClass(_class: Class): this {
    return this;
  }

  declare(declaration: Declaration): this {
    return this;
  }

  withFunction(functionDeclaration: FunctionDeclraration) {
    return this;
  }

  __finalize() {
    throw "not implemented";
  }
}
