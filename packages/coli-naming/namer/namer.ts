import { nameit } from "../main";
import { NameCase, NameCases, NamingResult, NamingSeedLike } from "../types";

export type NamingPreferences = {
  case?: NameCase;
  exclude?: string[];
};

export abstract class Namer {
  /**
   * used name
   */
  protected readonly _table = [];
  protected get table() {
    return this.table;
  }

  constructor(
    /**
     * the identifier of this namer.
     */
    readonly identifier: string,
    readonly preferences: NamingPreferences = {
      exclude: [],
      case: NameCases.camel,
    }
  ) {}

  register(name: string) {
    if (!this._table.includes(name)) {
      this._table.push(name);
    }
  }

  clear() {
    this._table.length = 0;
  }

  nameit(
    seed: NamingSeedLike,
    preferences: {
      case: NameCase;
      register?: boolean;
    }
  ): NamingResult & {
    /**
     * call this to register explicitly
     */
    register: () => void;
  } {
    const name = nameit(seed, preferences);
    const safename = this.nonconflicingname([
      name.name,
      ...(name.candidates ?? []),
    ]);

    // if not explicitly set to false, register it.
    if (preferences?.register !== false) {
      this.register(safename);
    }

    return {
      ...name,
      name: safename,
      register: () => this.register(safename),
    };
  }

  protected nonconflicingname(candidates: string[]): string {
    const safe = candidates.find((c) => {
      const notintable = !this._table.includes(c);
      const notinexclude = !this.preferences.exclude.includes(c);
      return notintable && notinexclude;
    });

    if (safe) {
      return safe;
    } else {
      const firstCandidate = candidates[0];
      const safe = this.makeunique(firstCandidate);
      return safe;
    }
  }

  protected abstract makeunique(name: string): string;
}
