export type MdastContent = FlowContent | ListContent | PhrasingContent;
export type FlowContent =
  | Blockquote
  | Code
  | Heading
  // | HTML
  | List
  | ThematicBreak
  | Content;
export type PhrasingContent =
  | Link
  // LinkReference
  | StaticPhrasingContent;
export type StaticPhrasingContent =
  | Break
  | Emphasis
  // | HTML
  | Image
  // | ImageReference
  | InlineCode
  | Strong
  | Text;
export type ListContent = ListItem;
export type Content =
  // Definition
  Paragraph;

export abstract class MarkdownToken {
  abstract toString(): string;
}

export class Paragraph extends MarkdownToken {
  children: MarkdownToken[];
  toString() {
    return this.children.map((c) => c.toString()).join("\n");
  }
}

export class Image extends MarkdownToken {
  url: string;
  alt: string;

  toString() {
    return `![${this.alt}](${this.url})`;
  }
}

export class Break extends MarkdownToken {
  toString(): string {
    return "\n";
  }
}

export class ThematicBreak extends MarkdownToken {
  toString(): string {
    return "---";
  }
}

export class Blockquote extends MarkdownToken {
  children: MarkdownToken[];

  toString() {
    return `> ${this.children.map((c) => c.toString()).join("\n> ")}`;
  }
}

export class Code extends MarkdownToken {
  lang: string;
  value: string;

  toString() {
    return `\`\`\`${this.lang}\n${this.value}\n\`\`\``;
  }
}

export class List extends MarkdownToken {
  ordered: boolean;
  spread: boolean;
  children: ListItem[];

  toString() {
    // TODO: support ordered, speread
    return this.children.map((c) => c.toString()).join("\n");
  }
}

export class ListItem extends MarkdownToken {
  spread: boolean;
  children: MarkdownToken[];

  toString() {
    return this.children.map((c) => c.toString()).join("\n");
  }
}

export class Text extends MarkdownToken {
  value: string;

  toString() {
    return this.value;
  }
}

export class Emphasis extends MarkdownToken {
  childern: MarkdownToken[];

  toString() {
    return `*${this.childern.map((c) => c.toString()).join(" ")}*`;
  }
}

export class Strong extends MarkdownToken {
  childern: MarkdownToken[];
  toString() {
    return `**${this.childern.map((c) => c.toString()).join(" ")}**`;
  }
}

export class InlineCode extends MarkdownToken {
  value: string;
  toString() {
    return `\`${this.value}\``;
  }
}

export class Link extends MarkdownToken {
  url: string;
  children: MarkdownToken[];

  toString() {
    return `[${this.children.map((c) => c.toString()).join(" ")}](${this.url})`;
  }
}

// export class ImageReference extends MarkdownToken {}

export class Heading extends MarkdownToken {
  depth: 1 | 2 | 3 | 4 | 5 | 6;
  children: MarkdownToken[];

  toString() {
    return `${Array(this.depth).join("#")} ${this.children
      .map((c) => c.toString())
      .join(" ")}`;
  }
}
