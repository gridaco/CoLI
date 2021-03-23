import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

class ImportDeclaration {
  _default: string;
  _form: string;

  constructor({ importDefault, from }) {
    this._default = importDefault;
    this._form = from;
  }

  public call() {
    let code = "";

    code += `import ${this._default} from "${this._form}"`;

    return code;
  }
}

export function CodePreview() {
  
  const [code, setCode] = useState("");

  useEffect(() => {
    setCode(
      new ImportDeclaration({
        importDefault: "styled",
        from: "@emotion/styled",
      }).call()
    );
  }, []);

  return (
    <Wrapper showLineNumbers language="typescript">
      {`
${code}

// new ImportDeclaration({
//    importDefault: “styled”,
//    from: “@emotion/styled”
// })
    `}
    </Wrapper>
  );
}

const Wrapper = styled(SyntaxHighlighter)`
  flex: 1.5;

  font-size: 0.9em !important;
  margin: 0em !important;
  padding: 1em 0em !important;
`;
