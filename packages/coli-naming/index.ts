interface NamingSeed {}

type NamingSeedLike = string | NamingSeed;

interface NamingResult {
  name: string;
  candidates?: string[];
  reason?: string;
}

/**
 * automatically names with givven seed input
 * @param seed
 * @returns
 */
export function nameit(seed: NamingSeedLike): NamingResult {
  // single string seed
  if (typeof seed == "string") {
    //
  }
  // NamingSeed seed
  else if (typeof seed == "object" && "name" in seed) {
    //
  } else {
    throw `invalid seed data ${JSON.stringify(
      seed
    )} cannot be used as seed. allowed seed types are - \`type NamingSeedLike = string | NamingSeed\``;
  }
  return {
    name: "",
  };
}

/**
 * Namer with scoped reference. used for preventing duplication.
 */
export class ScopedNamer {
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
    options?: {
      register?: boolean;
    }
  ): NamingResult {
    const name = nameit(seed);

    // if not explicitly set to false, register it.
    if (options?.register !== false) {
      this.register(name.name);
    }

    return name;
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
