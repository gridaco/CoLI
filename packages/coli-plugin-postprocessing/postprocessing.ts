class Configure {
  __upsert?: boolean;
  set _upsert(_: boolean) {
    this.__upsert = _;
  }
  get _upsert(): boolean {
    return this.__upsert || false;
  }

  upsert(_: boolean): this {
    this._upsert = _;
    return this;
  }
}

const instances: Map<string, Postprocessing> = new Map();

export class Postprocessing {
  readonly id: string;
  private readonly _configure = new Configure();
  private readonly kvmap: { [key: string]: string } = {};

  constructor(id?: string) {
    this.id = id ?? random();
    instances.set(this.id, this);
  }

  static create(id?: string) {
    return new Postprocessing(id);
  }

  static use(id: string): Postprocessing {
    // throw if not found
    if (!instances.has(id)) {
      throw new Error(`Postprocessing instance with id <${id}> not found`);
    }

    return instances.get(id)!;
  }

  static configure() {
    return this.configure;
  }

  reserve(key: string, defaultValue?: string) {
    const value = defaultValue ?? key;
    this.kvmap[key] = value;
    return Postprocessing.hash(key);
  }

  resolve(key: string, value: string) {
    this.kvmap[key] = value;
  }

  replace(input: string) {
    let _ = input;
    const keys = Object.keys(this.kvmap);
    for (const key of keys) {
      const value = this.kvmap[key];
      _ = Postprocessing.replace(_, key, value);
    }
    return _;
  }

  static replace(input: string, key: string, value: string) {
    const hash = this.hash(key);
    const re = RegExp(hash, "g");
    return input.replace(re, value);
  }

  static hash(key: string) {
    return hash(key);
  }
}

function random(): string {
  return Math.random().toString(36).substring(2);
}

/**
 * create unique hash string from input string. this will be used as a key to replace values later on.
 */
function hash(key: string): string {
  return `<key>${key}</key>`;
}
