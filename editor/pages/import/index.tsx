import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ImportDeclaration, {
  ImportDeclaration as ImportDeclarationInterface,
} from "../../components/declarations/import";
import CodeBlock from "../../components/code-block";

const importDefaultData: {
  example: string;
  declarations: ImportDeclarationInterface[];
} = {
  example: `import default, { default as styled, p1 as p1, p2 as p2 } from 'module'`,
  declarations: [
    {
      _default: "styled",
      _import: [null],
      _from: "@emotion/styled",
    },
    {
      _default: "styled",
      _import: ["utils", "helpers"],
      _from: "@emotion/styled",
    },
    {
      _default: null,
      _import: ["utils", "helpers"],
      _from: "@emotion/styled",
    },
    {
      _default: null,
      _import: ["utils as ut", "helpers as hp"],
      _from: "@emotion/styled",
    },
  ],
};

function CoLiImportDemoPage() {
  return (
    <Wrapper>
      <div className="declarations-view">
        <CodeBlock>{importDefaultData.example}</CodeBlock>
        {importDefaultData.declarations.map((i, ix) => (
          <ImportDeclaration id={ix} data={i} key={ix} />
        ))}
      </div>
    </Wrapper>
  );
}

export default CoLiImportDemoPage;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .declarations-view {
    width: calc(100% - 175px);
    margin-top: 35px;
    margin-left: 175px;
    flex: 1;

    pre {
      font-size: 12px !important;
      padding-left: 0px !important;
    }
  }
`;
