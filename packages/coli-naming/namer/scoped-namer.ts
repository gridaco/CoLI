import { nameit, randomHash } from "../main";
import {
  getReservedKeywords,
  ReservedKeywordPlatformSelection,
} from "../reserved";
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

  constructor(
    readonly identifier: string,
    readonly platform: ReservedKeywordPlatformSelection
  ) {}
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
      const notintable = !this._table.includes(c);
      const notinreserved = !getReservedKeywords(this.platform).includes(c);
      return notintable && notinreserved;
    });

    if (safe) {
      return safe;
    } else {
      const firstCandidate = candidates[0];
      const safe = this.extendWithIncremental(firstCandidate);
      // console.warn(
      //   `all of the scoped naming candidates are used. using pure random name instead - "${safe}". the candidates were ${candidates}`
      // );
      return safe;
    }
  }

  private extendWithRandom(nonsafeName: string): string {
    return nonsafeName + `_` + randomHash(4);
  }

  private extendWithIncremental(nonsafeName: string) {
    const formattedNum = (i: number): string => {
      // 1 to 0001
      var str = "" + i;
      var pad = "0000";
      var ans = pad.substring(0, pad.length - str.length) + str;
      return ans;
    };
    let i = 1;
    let safeName = `${nonsafeName}_${formattedNum(i)}`;
    while (this._table.includes(safeName)) {
      i++;
      safeName = `${nonsafeName}_${formattedNum(i)}`;
    }
    return safeName;
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
