import { ColiObject } from "../_abstract";
import { ColiBlock } from "./block";

export abstract class ColiBuilder<T extends ColiObject = any> {
  private blocks: ColiBlock<T>[] = [];

  // fixme - add  | ColiBlock<T> support
  private __finalized: T;
  abstract __finalize(): T;

  make(): T {
    if (this.__finalized == undefined) {
      this.__finalized = this.__finalize();
    }
    return this.__finalized;
  }
}
