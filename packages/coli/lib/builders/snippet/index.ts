import { ColiObject } from "../../_abstract";

// FIXME - extend coli object
export class Snippet extends ColiObject {
  _defaultSnippet: string;
  constructor(defaultSnippet?: string) {
    super("__WILDCARD__");
    this._defaultSnippet = defaultSnippet;
  }

  static fromStatic<T extends ColiObject>(snippet: string): Snippet | T {
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
