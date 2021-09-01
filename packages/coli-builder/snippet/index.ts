import { _abstract } from "@coli.codes/core";
import { COLI_WILDCARD_KEY } from "@coli.codes/core/_wildcard";
export class Snippet extends _abstract.ColiObject {
  _defaultSnippet: string;
  constructor(defaultSnippet?: string) {
    super(COLI_WILDCARD_KEY);
    this._defaultSnippet = defaultSnippet;
  }

  static fromStatic<T extends _abstract.ColiObject>(
    snippet: string
  ): Snippet | T {
    // dangerously cast type
    return new Snippet(snippet) as any as T;
  }

  lookup(): string {
    return this._defaultSnippet;
  }

  get name(): string {
    return this.constructor.name;
  }
}
