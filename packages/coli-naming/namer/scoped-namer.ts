import { nameit, randomHash } from "../main";
import { NameCase, NamingResult, NamingSeedLike } from "../types";

/**
 * Namer with scoped reference. used for preventing duplication.
 */
export class ScopedVariableNamer {
  /**
   * used name
   */
  private readonly _table = [];
  get table() {
    return this.table;
  }

  constructor(readonly identifier: string) {}
  nameit(
    seed: NamingSeedLike,
    preferences: {
      case: NameCase;
    },
    options?: {
      register?: boolean;
    }
  ): NamingResult {
    const name = nameit(seed, preferences);
    console.log("name", name);
    const safename = this.nonconflicingname([
      name.name,
      ...(name.candidates ?? []),
    ]);

    // if not explicitly set to false, register it.
    if (options?.register !== false) {
      this.register(safename);
    }

    return {
      ...name,
      name: safename,
    };
  }

  private nonconflicingname(candidates: string[]): string {
    const safe = candidates.find((c) => {
      return !this._table.includes(c);
    });

    if (safe) {
      return safe;
    } else {
      const firstCandidate = candidates[0];
      const safe = this.extendWithRandom(firstCandidate);
      console.warn(
        `all of the scoped naming candidates are used. using pure random name instead - "${safe}". the candidates were ${candidates}`
      );
      return safe;
    }
  }

  private extendWithRandom(nonsafeName: string): string {
    return nonsafeName + `_` + randomHash(4);
  }

  register(name: string) {
    if (!this._table.includes(name)) {
      this._table.push(name);
    }
  }

  clear() {
    this._table.length = 0;
  }
}
