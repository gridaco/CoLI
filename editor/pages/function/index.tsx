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
      default: "styled",
      _import: [null],
      _from: "@emotion/styled",
    },
    {
      default: "styled",
      _import: ["utils", "helpers"],
      _from: "@emotion/styled",
    },
    {
      default: null,
      _import: ["utils", "helpers"],
      _from: "@emotion/styled",
    },
    {
      default: null,
      _import: ["utils as ut", "helpers as hp"],
      _from: "@emotion/styled",
    },
  ],
};

function CoLiFunctionDemoPage() {
  return (
    <Wrapper>
      <div className="declarations-view">
        <CodeBlock>{functionDefaultData.example}</CodeBlock>
        {functionDefaultData.declarations.map((i, ix) => (
          <FunctionDeclaration id={ix} data={i} key={ix} />
        ))}
      </div>
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
      padding-left: 0px !important;
    }
  }

  .code-previews-view {
    flex: 1;
  }
`;
