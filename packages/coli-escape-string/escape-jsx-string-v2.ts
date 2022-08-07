///
/// JSX escape v2 - WIP
///

const _JSX_SPECIALS = ["{", "}", "<", ">"] as const;

/**
 * based on jsx, most preffered syntax to front of the list.
 *
 * - if first item is same as the input, that it is not neccessary to escape. (yet hightly recommended) - e.g. '&'
 */
const ESCAPE_MAP = {
  "&": ["&", "&amp;", "&#38;", "&#x26;"],
  "<": ["&lt;", "&#60;", "&#x3C;"],
  ">": ["&gt;", "&#62;", "&#x3E;"],
  '"': ["&quot;", "&#34;", "&#x22;"],
  "'": ["\\'", "&#x27;"],
  "/": ["&sol;", "&#47;", "&#x2F;"],
  "\\" /* (\) */: ["\\\\" /* (\\) */, "&bsol;", "&#92;", "&#x5C;"],
  "{": ['{"{"}', "&lcub;", "&#123;", "&#x7B;"],
  "}": ['{"}"}', "&rcub;", "&#125;", "&#x7D;"],
};

const SPECIAL_INJECTIONS = {
  "&": ":::::0x26:::::",
  "<": ":::::0x3C:::::",
  ">": ":::::0x3E:::::",
  '"': ":::::0x22:::::",
  "'": ":::::0x27:::::",
  "/": ":::::0x2F:::::",
  "\\" /* (\) */: ":::::0x5C:::::",
  "{": ":::::0x7B:::::",
  "}": ":::::0x7D:::::",
};

const UTF8_TO_OG = {
  "0x26": "&",
  "0x3C": "<",
  "0x3E": ">",
  "0x22": '"',
  "0x27": "'",
  "0x2F": "/",
  "0x5C": "\\",
  "0x7B": "{",
  "0x7D": "}",
};

type EscapeModes = "brace" | "entity" | "backslash";
/**
 * handling cases
 * @param text
 * @deprecated
 * @beta
 */
export function escapeJsxStringV2(
  text: string,
  options?: {
    /**
     * - brace - wrap content with {""}
     * - html - replace characters that causes jsx error with html characters. e.g. '{' => '&#123;'
     *
     * @default ['brace', 'backslash', 'entity'] (ordered by preference)
     */
    use?: EscapeModes | EscapeModes[];
  }
): string {
  if (!text) {
    return text;
  }

  // 0. handle special characters
  const targets = Array.from(
    new Set(
      _JSX_SPECIALS.filter((char) => {
        return text.includes(char);
      })
    )
  );

  // 1. lines_formatted (this needs to be executed after 0, - because formatting lines will add special characters, causing 0 to be always true)
  text = formatLines(text);

  // if special chars are contained, we have to put it in `{ "<content>" }`
  if (targets.length > 0) {
    targets.forEach((t) => {
      const re = new RegExp(t, "g");
      const tmp = SPECIAL_INJECTIONS[t];
      text = text.replace(re, tmp);
      // console.log(text);
    });

    let tokens: string[] = [text];
    targets.forEach((tgt) => {
      tokens.forEach((tkn, i) => {
        if (!tkn.match(/^:::::(.*?):::::$/)) {
          const tmp = SPECIAL_INJECTIONS[tgt];
          const tmpsplit = new RegExp(`(${tmp})`, "g");

          // remote tkn from tokens
          tokens.splice(i, 1);
          // insert new tokens to tokens
          tokens.splice(i, 0, ...tkn.split(tmpsplit));
        }
      });
    });

    console.log(tokens);

    return tokens
      .map((t) => {
        const match = t.match(/^:::::(.*?):::::$/);
        if (match) {
          const tgt = UTF8_TO_OG[match[1]];
          return t.replace(/^(.*?)$/, ESCAPE_MAP[tgt][0]);
        }
        return t;
      })
      .join("");
  }

  return text;
}

/**
 * adds {"\n"} or <br/> to each line break
 *
 * - (replace `\n` with `{"\\n"}`)
 * - (replace `\n` with `<br/>`)
 * @param lines
 * @returns
 */
function formatLines(lines: string, use: "<br/>" | "{\\n}" = "<br/>") {
  return (
    lines
      //
      .split("\n")
      //
      .join(`${use}\n`)
  );
}
