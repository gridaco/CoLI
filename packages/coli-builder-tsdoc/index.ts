export * from "./tokens";

import type { Identifier } from "@coli.codes/core";
import {
  TsDocManagedTagKind,
  DocTag,
  Block,
  PlainText,
  ParameterTag,
} from "./tokens";

type Token = "\n" | " ";

class TsDoc {
  tokens: Array<Block> = [];

  alpha(comment?: string): this {
    this.tokens.push(new DocTag("alpha", "alpha", comment));
    return this;
  }

  beta(comment?: string): this {
    this.tokens.push(new DocTag("beta", "beta", comment));
    return this;
  }

  paragraph(): this {
    // this.tokens.push(new Block());
    return this;
  }

  block(): this {
    return this;
  }

  defaultValue(): this {
    return this;
  }

  decorator(): this {
    return this;
  }

  deprecated(comment?: string): this {
    return this;
  }

  example() {
    return this;
  }

  experimental() {
    return this;
  }

  internal() {
    return this;
  }

  label() {
    return this;
  }

  link(): this {
    return this;
  }

  list(): this {
    return this;
  }

  li(): this {
    return this;
  }

  override() {
    return this;
  }

  plain(text: string): this {
    this.tokens.push(new PlainText(text));
    return this;
  }

  /**
   * @example
   * {@link https://tsdoc.org/pages/tags/packagedocumentation/}
   */
  packageDocumentation() {
    return this;
  }

  remarks() {
    return this;
  }

  privateRemarks() {
    return this;
  }

  public() {
    return this;
  }

  readonly() {
    return this;
  }

  returns() {
    return this;
  }

  sealed() {
    return this;
  }

  see() {
    return this;
  }

  throws() {
    return this;
  }

  typeParam(): this {
    return this;
  }

  virtual() {
    return this;
  }

  /**
   * creates new soft break (new line)
   * @returns
   */
  br(): this {
    return this;
  }

  image(): this {
    return this;
  }

  param(name?: string | Identifier, comment?: string): this {
    this.tokens.push(new ParameterTag(name, comment));
    return this;
  }

  // region modifiers

  private marks: Map<TsDocManagedTagKind, string | undefined> = new Map();

  markAlpha(comment?: string) {
    this.marks.set("alpha", comment);
    return this;
  }

  markBeta(comment?: string) {
    this.marks.set("beta", comment);
    return this;
  }

  markDeprecated(comment?: string) {
    this.marks.set("deprecated", comment);
    return this;
  }

  markExperimental(comment?: string) {
    this.marks.set("experimental", comment);
    return this;
  }

  markSealed(comment?: string) {
    this.marks.set("sealed", comment);
    return this;
  }

  markReadonly(comment?: string) {
    this.marks.set("readonly", comment);
    return this;
  }

  markVirtual(comment?: string) {
    this.marks.set("virtual", comment);
    return this;
  }

  markInternal(comment?: string) {
    this.marks.set("internal", comment);
    return this;
  }
  // endregion

  toString(): string {
    let doc = "";
    // blocks
    doc = this.tokens.map((t) => t.toString()).join("");

    // marks
    const marksection = Object.keys(this.marks)
      .map((key: TsDocManagedTagKind) => {
        const comment = this.marks.get(key);
        return `@${key}${comment ? ` ${comment}` : ""}`;
      })
      .join("\n");

    return `${doc}${marksection.length > 0 ? `\n${marksection}` : ""}`;
  }
}

export { TsDoc as Tsdoc };

export default TsDoc;
