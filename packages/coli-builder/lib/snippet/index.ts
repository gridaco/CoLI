import { _abstract, _internal } from "@coli.codes/core";
export class Snippet extends _abstract.ColiObject {
  _defaultSnippet: string;
  constructor(defaultSnippet?: string) {
    super(_internal.COLI_WILDCARD_KEY);
    this._defaultSnippet = defaultSnippet;
  }

  static fromStatic<T extends _abstract.ColiObject>(
    snippet: string
  ): Snippet | T {
    // dangerously cast type
    return (new Snippet(snippet) as any) as T;
  }

  lookup(): string {
    return this._defaultSnippet;
  }

  get name(): string {
    return this.constructor.name;
  }
}
