import { nameit, randomHash } from "../main";
import {
  getReservedKeywords,
  ReservedKeywordPlatformSelection,
} from "../reserved";
import { Namer } from "./namer";

/**
 * Namer with scoped reference. used for preventing duplication.
 */
export class ScopedVariableNamer extends Namer {
  constructor(
    /**
     * the identifier of this namer.
     */
    readonly identifier: string,
    readonly platform: ReservedKeywordPlatformSelection = []
  ) {
    super(identifier, {
      exclude: getReservedKeywords(platform),
    });
  }

  private extendWithRandom(nonsafeName: string): string {
    return nonsafeName + `_` + randomHash(4);
  }

  protected makeunique(name: string): string {
    return this.extendWithIncremental(name);
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
}
