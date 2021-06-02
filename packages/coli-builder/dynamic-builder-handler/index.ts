import { ColiBuilder } from "@coli.codes/core";
import { ColiObject } from "@coli.codes/core/_abstract";

export type ColiObjectLike<T extends ColiObject> = ColiBuilder<T> | T;
export function handle<T extends ColiObject = any>(
  o: ColiObjectLike<T>
): ColiObject {
  if (o instanceof ColiBuilder) {
    return o.make();
  } else if (o instanceof ColiObject) {
    return o;
  }
  throw `not handled builder or object passed. the givven parameter o is not a ColiObject or ColiBuilder - ${o}`;
}
