import { Identifier } from "@coli.codes/core";

export type TsDocTokenKind = TsDocTagKind;

export type TsDocTagKind = TsDocAnyTagKind | TsDocManagedTagKind;
export type TsDocAnyTagKind = "block" | "modifier" | "inline";
export type TsDocManagedTagKind =
  | "alpha"
  | "beta"
  | "decorator"
  | "deprecated"
  | "defaultValue"
  | "eventProperty"
  | "example"
  | "experimental"
  | "inheritDoc"
  | "internal"
  | "label"
  | "link"
  | "override"
  | "packageDocumentation"
  | "param"
  | "privateRemarks"
  | "public"
  | "readonly"
  | "remarks"
  | "returns"
  | "sealed"
  | "see"
  | "throws"
  | "typeParam"
  | "virtual";

export abstract class DocToken {
  constructor(readonly __type: TsDocTokenKind) {}
}

export class DocTag extends DocToken {
  tagName: Identifier;
  comment?: string;

  constructor(
    tag: TsDocTagKind,
    tagName: Identifier | string,
    comment?: string
  ) {
    super(tag);
    if (typeof tagName === "string") {
      this.tagName = new Identifier(tagName);
    } else {
      this.tagName = tagName;
    }
    this.comment = comment;
  }

  toString(): string {
    return `@${this.__type}${this.comment ? ` ${this.comment}` : ""}`;
  }
}

/**
 * `@deprecated`
 */
export class DeprecatedTag extends DocTag {
  constructor(comment?: string) {
    super("deprecated", "deprecated", comment);
  }
}

/**
 * `@link` tag
 * @example
 *
 * ```ts
 * {@link https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-7.html}
 * ```
 */
export class LinkTag extends DocTag {
  comment?: string;
  spacing: string = " ";
  urlDestination: string;
  linkText: string;
  openingDelimiter: string = "{";
  closingDelimiter: string = "}";
  pipe: string;
  declarationReference: DeclarationReference;
}

/**
 * `@override`
 */
export class OverrideTag extends DocTag {
  constructor(comment?: string) {
    super("override", "override", comment);
  }
}

/**
 * `@param`
 */
export class ParameterTag extends DocTag {
  public readonly name?: Identifier;
  constructor(name?: string | Identifier, comment?: string) {
    super("param", "param", comment);
    if (typeof name === "string") {
      this.name = new Identifier(name);
    } else if (name instanceof Identifier) {
      this.name = name;
    } else {
      this.name = name;
    }
  }

  toString(): string {
    return `@${this.__type} ${this.name ? this.name.toString() : ""}${
      this.comment ? ` ${this.comment}` : ""
    }`;
  }
}

export class PublicTag extends DocTag {
  constructor(comment?: string) {
    super("public", "public", comment);
  }
}

/**
 * `@readonly`
 */
export class ReadonlyTag extends DocTag {
  constructor(comment?: string) {
    super("readonly", "readonly", comment);
  }
}

/**
 * `@returns`
 * @remarks
 * This tag is used to document the return value of a function.
 * The tag can be used in the following ways:
 * - `@returns` - This is the default behavior.
 * - `@returns {type}` - This is used to specify the return type of the function.
 */
export class ReturnsTag extends DocTag {
  constructor(comment?: string) {
    super("returns", "returns", comment);
  }
}

/**
 * `@see`
 */
export class SeeTag extends DocTag {
  name: Identifier;
  constructor(name: Identifier, comment?: string) {
    super("see", "see", comment);
    this.name = name;
  }

  toString(): string {
    return `@${this.__type} ${this.name.toString()}${
      this.comment ? ` ${this.comment}` : ""
    }`;
  }
}

export class Comment {
  comment: string;
  tags: DocTag[];
}

export class Paragraph {}

export class FencedCode {
  language: string;
  code: string;
  openingFence: string = "```";
  closingFence: string = "```";
}

export class CodeSpan {
  openingDelimiter: string = "`";
  closingDelimiter: string = "`";
  code: string;
}

export class SoftBreak {}

export class PlainText {
  constructor(public readonly text: string) {}
}

export class DeclarationReference {
  PackageName;
  ImportHash;
}

export class Block {}

//

import type {
  Paragraph,
  Image,
  ThematicBreak,
  Code,
  List,
} from "@coli.codes/markdown-core";

type TSDocSupportedMarkdownTags =
  | Paragraph
  | Image
  | ThematicBreak
  | Code
  | List;
