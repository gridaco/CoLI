import { Types, Identifier } from "coli";
import React from "react";
import FunctionDeclaration, {
  FunctionDeclaration as FunctionDeclarationInterface,
} from "../../../components/declarations/function";
import styled from "@emotion/styled";
import CodeBlock from "../../../components/code-block";

const functionDefaultData: {
  example: string;
  declarations: FunctionDeclarationInterface[];
} = {
  example: `let variableName : any = 0`,
  declarations: [
    {
      name: "sum",
      args: {
        params: [
          new Identifier("a", {
            typeAnnotation: Types.number,
          }),
          new Identifier("b", {
            typeAnnotation: Types.number,
          }),
        ],
        returnType: Types.any,
        body: null,
      },
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
