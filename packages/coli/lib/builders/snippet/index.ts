import { AstBuildableTree } from "../../_out/ast-builder/buildable-tree";
import { AstBuildingTree } from "../../_out/ast-builder/building-tree";

// FIXME - extend coli object
export class Snippet extends AstBuildableTree {
  _defaultSnippet: string;
  constructor(defaultSnippet?: string) {
    super();
    this._defaultSnippet = defaultSnippet;
  }

  static fromStatic<T extends AstBuildableTree>(snippet: string): Snippet | T {
    // dangerously cast type
    return (new Snippet(snippet) as any) as T;
  }

  build(depth?: number): AstBuildingTree {
    return new SnippetBuildingTree(this._defaultSnippet);
  }

  lookup(): string {
    return this._defaultSnippet;
  }

  get name(): string {
    return this.constructor.name;
  }
}

export class SnippetBuildingTree extends AstBuildingTree {
  snippet: string;
  constructor(snippet: string) {
    super();
    this.snippet = snippet;
  }

  build() {
    return this;
  }

  lookup() {
    return this.snippet;
  }
}
