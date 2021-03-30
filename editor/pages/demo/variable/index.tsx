import { Types } from "coli/lib";
import React from "react";
import VariableDeclaration, {
  VariableDeclaration as VariableDeclarationInterface,
} from "../../../components/declarations/variable";
import styled from "@emotion/styled";
import CodeBlock from "../../../components/code-block";

const variableDefaultData: {
  example: string;
  declarations: VariableDeclarationInterface[];
} = {
  example: `let variableName : any = 0`,
  declarations: [
    {
      name: "variableName",
      args: {
        scope: "let",
        variableType: Types.any,
        value: "",
      },
    },
  ],
};
function CoLiVariableDemoPage() {
  return (
    <Wrapper>
      <div className="declarations-view">
        <CodeBlock>{variableDefaultData.example}</CodeBlock>
        {variableDefaultData.declarations.map((i, ix) => (
          <VariableDeclaration id={ix} data={i} key={ix} />
        ))}
      </div>
    </Wrapper>
  );
}

export default CoLiVariableDemoPage;

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
