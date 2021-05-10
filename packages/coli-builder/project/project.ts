import { SourceFile } from "../file";

export class Project {
  name: string;
  main: SourceFile;
  files: SourceFile;

  setMain(source: SourceFile): this {
    this.main = source;
    return this;
  }

  /**
   * utility function for inspecting the tree structure ot this project. comething like `tree` command
   * @todo this is not yet implemented.
   */
  tree() {
    throw "not implemented";
  }
}
