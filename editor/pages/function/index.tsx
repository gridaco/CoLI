import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { CodePreview } from "../../components/code-preview";
import FunctionDeclaration, {
  FunctionDeclaration as FunctionDeclarationInterface,
} from "../../components/declarations/function";
import { useDeclarationState } from "../../context/DeclarationContext";
import { useRecoilState } from "recoil";
import { currentDeclarationAtom } from "../../states/declaration.state";
import CodeBlock from "../../components/code-block";

const functionDefaultData: {
  example: string;
  declarations: FunctionDeclarationInterface[];
} = {
  example: `import default, { default as styled, p1 as p1, p2 as p2 } from 'module'`,
  declarations: [
    {
      defaultImport: "styled",
      importNamed: [null],
      from: "@emotion/styled",
    },
    {
      defaultImport: "styled",
      importNamed: ["utils", "helpers"],
      from: "@emotion/styled",
    },
    {
      defaultImport: null,
      importNamed: ["utils", "helpers"],
      from: "@emotion/styled",
    },
    {
      defaultImport: null,
      importNamed: ["utils as ut", "helpers as hp"],
      from: "@emotion/styled",
    },
  ],
};

function CoLiFunctionDemoPage() {
  // const [declaration, setDeclaration] = useRecoilState({
  //   key : "function-declaration",
  //   // get: ({ get }) => {}
  // })

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <div className="declarations-view">
        <CodeBlock>{functionDefaultData.example}</CodeBlock>
        {functionDefaultData.declarations.map((i, ix) => (
          <FunctionDeclaration id={ix} data={i} />
        ))}
      </div>
      <div className="code-previews-view">.</div>
    </Wrapper>
  );
}

export default CoLiFunctionDemoPage;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .declarations-view {
    margin-top: 35px;
    margin-left: 175px;
    flex: 1;

    pre {
      font-size: 12px !important;
      background-color: #fff !important;
      padding-left: 0px !important;
    }
  }

  .code-previews-view {
    flex: 1;
  }
`;
