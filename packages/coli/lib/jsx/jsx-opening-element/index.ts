import { JSXAtrributes } from "../jsx-attributes";
import { JSXIdentifier } from "../jsx-identifier";

export class JSXOpeningElement {
  readonly name: JSXIdentifier;
  readonly atrributes: JSXAtrributes = [];

  constructor(
    name: JSXIdentifier,
    params?: {
      atrributes: JSXAtrributes;
    }
  ) {
    this.name = name;
    this.atrributes = params?.atrributes;
  }
}
