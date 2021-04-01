import { Block } from "coli/lib";
import { Identifier } from "coli/lib/ast";
import { FunctionDeclaration } from "coli/lib/declarations/function";
import { CommentExpression } from "coli/lib/expressions/comment";
import { ColiObject } from "coli/lib/_abstract";
type Keyword = string;
type KindInterpreter<T extends ColiObject | string = string> =
  | ((coli: T, a?) => string)
  | Keyword;

interface LanguageInterpreterMap {
  CommentExpression: KindInterpreter<CommentExpression>;
  FunctionDeclaration: KindInterpreter<FunctionDeclaration>;
  FunctionKeyword: KindInterpreter;
  Block: KindInterpreter<Block>;
  Identifier: KindInterpreter<Identifier>;
}

const ESInterpreter: LanguageInterpreterMap = {
  CommentExpression: (c: CommentExpression, a) => {
    return `//${c.content}`;
  },
  Identifier: (i: Identifier) => {
    return `${i.name}`;
  },
  Block: (b: Block) => {
    return `{
        ${stringfy(b.body)}
}`;
  },
  FunctionDeclaration: (f: FunctionDeclaration, a) => {
    return `${ESInterpreter.FunctionKeyword} ${stringfy(f.id)} () ${stringfy(
      f.body
    )}`;
  },
  FunctionKeyword: "function",
};

const comment = new CommentExpression({
  content: "comment",
  style: "multi-line",
});

const func = new FunctionDeclaration("add", {
  body: new Block(comment),
});

function stringfy(params): string {
  //   console.log(params.__type);
  //   console.log(params);

  if (Array.isArray(params)) {
    let frag = "";
    params.map((p) => {
      const f = stringfy(p);
      frag += f;
    });
    return frag;
  }
  if (params.__type) {
    return ESInterpreter[params.__type](params);
  }
  return "";
}

console.log(stringfy(func));
