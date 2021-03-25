import { ColiBuilder } from "../../builder";
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

export abstract class File extends ColiBuilder {
  abstract addImport(module: string): this;
  abstract addClass(_class: Class): this;
  abstract build();
}
