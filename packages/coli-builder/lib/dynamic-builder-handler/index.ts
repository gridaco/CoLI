import { ColiBuilder, ColiObject } from "@coli.codes/core";

export type ColiObjectLike<T extends ColiObject> = ColiBuilder<T> | T;
export function handle<T extends ColiObject = any>(o: ColiObjectLike<T>): T {
  if (o instanceof ColiBuilder) {
    return o.make();
  } else if (o instanceof ColiObject) {
    return o;
  }
  throw `not handled builder or object passed. the givven parameter o is not a ColiObject or ColiBuilder - ${o}`;
}
