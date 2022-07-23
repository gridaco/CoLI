import { MarkdownToken, ListItem } from "./tokens";

//  TODO: add template string call suppport. e.g.
// h1`Hello` -> h1("Hello") -> # Hello

class Markdown {
  private tokens: Array<MarkdownToken> = [];

  p() {
    return this;
  }

  code() {
    return this;
  }

  image() {
    return this;
  }

  thematicBreak() {
    return this;
  }

  list(...li: Array<Markdown>) {
    return this;
  }

  li() {
    this.__listItem();
    return this;
  }

  link() {
    return this;
  }

  listItem() {
    this.__listItem();
    return this;
  }

  private __listItem() {}

  text() {
    return this;
  }

  emphasis() {
    this.__emphasis();
    return this;
  }

  italic() {
    this.__emphasis();
    return this;
  }

  __emphasis() {}

  strong() {
    this.__strong();
    return this;
  }

  bold() {
    this.__strong();
    return this;
  }

  private __strong() {}

  inlineCode() {
    return this;
  }

  heading() {
    return this;
  }

  h1() {
    return this;
  }

  h2() {
    return this;
  }

  h3() {
    return this;
  }

  h4() {
    return this;
  }

  h5() {
    return this;
  }

  h6() {
    return this;
  }
}

export * from "./tokens";

export { Markdown };

export default Markdown;
