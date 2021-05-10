import { ColiBuilder } from "../builder";
import { ColiBlock } from "../builder/block";
import { Declaration } from "../declarations/declaration.base";
import { FunctionDeclaration } from "../declarations/function";
import { ImportDeclaration } from "../declarations/import";
import { Class } from "../builders/class";
import { Function } from "../builders/function";

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
  readonly blocks: ColiBlock[] = [];
  constructor(params: {
    readonly path: string;
    readonly name: string;
    /**
     * optional extension. if extension specified on file name, you won't need to provide this one.
     */
    ext?: string;
  }) {
    super();

    // EXECUTION ORDER MATTERS
    // 0.
    this.name = params.name;
    // 1.
    // region handle ext
    if (params.ext) {
      this.ext = params.ext;
    } else {
      try {
        const __splited = params.name.split(".");
        const __ext = __splited[__splited.length - 1];
        this.ext = __ext;

        // if name like hello.py givven, extract py as extension, set hello as file name
        this.name = params.name.replace("." + __ext, "");
      } catch (_) {
        throw "you must provide approporate file extension in name or with ext field.";
      }
    }
    // endregion handle ext
  }

  import(...importDeclaration: ImportDeclaration[]): this {
    this.blocks.push(importDeclaration);
    return this;
  }

  withClass(_class: Class): this {
    this.blocks.push(_class);
    return this;
  }

  declare(...declaration: Declaration[]): this {
    this.blocks.push(declaration);
    return this;
  }

  withFunction(func: FunctionDeclaration | Function) {
    if (func instanceof FunctionDeclaration) {
      this.blocks.push(func);
    } else if (func instanceof Function) {
      this.blocks.push(func.make());
    }
    return this;
  }

  __finalize() {
    // file is not a ast node. returning this.
    return this;
  }
}
