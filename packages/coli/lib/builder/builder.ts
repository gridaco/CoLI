import { ColiObject } from "../_abstract";
import { ColiBlock } from "./block";

export abstract class ColiBuilder<T extends ColiObject = any> {
  private blocks: ColiBlock<T>[] = [];

  private __finalized: T | ColiBlock<T>;
  abstract __finalize(): T | ColiBlock<T>;

  make(): T | ColiBlock<T> {
    if (this.__finalized == undefined) {
      this.__finalized = this.__finalize();
    }
    return this.__finalized;
  }
}
