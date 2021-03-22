import { Buildable } from "../../buildable";
import { AstBuildingTree } from "../building-tree";

export interface AstBuildable extends Buildable {
  build(): AstBuildingTree;
}
