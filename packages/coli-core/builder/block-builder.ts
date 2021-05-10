import { ColiBuilder } from "./builder";

export abstract class ColiBlockBuilder extends ColiBuilder {
  /**
   * add comment to this block. just like this one.
   */
  withComment() {}

  /**
   * add document comment to this block. just like this one, but little more detailed.
   * @param doc
   */
  withDocument() {}
}
