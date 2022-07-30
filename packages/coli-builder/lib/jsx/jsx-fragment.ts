import { ColiBuilder } from "@coli.codes/core";

/**
 * this returns empty jsx fragment. <></> -- this is not a standard html form expression.
 * jsx fragment is defined in typescript by default, but coli decided to provide this as a builder sdk class (Not as a native node)
 */
export class JSXFragment extends ColiBuilder {
  __finalize() {
    throw new Error("Method not implemented.");
  }
}
