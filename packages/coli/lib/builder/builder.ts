import { ColiObject } from "../_abstract";
import { ColiBlock } from "./block";

export abstract class ColiBuilder<T extends ColiObject = any> {
  private blocks: ColiBlock[] = [];

  abstract finalize(): T;
}
