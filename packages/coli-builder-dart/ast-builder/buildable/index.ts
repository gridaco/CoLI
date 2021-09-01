import type { Buildable } from "../../buildable";
import type { AstBuildingTree } from "../building-tree";

export interface AstBuildable extends Buildable {
  build(): AstBuildingTree;
}
