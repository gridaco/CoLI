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

  constructor(id?: string) {
    this.id = id ?? random();
    instances.set(this.id, this);
  }

  static create(id?: string) {
    return new Postprocessing();
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

  reserve(key: string, defaultValue?: string) {}

  resolve(key: string, value: string) {}

  replace(content: string) {}

  static replace() {}
}

function random(): string {
  return Math.random().toString(36).substring(2);
}
