import React, { useEffect, useState } from "react";
import {
  VariableDeclaration as VariableClass,
  VariableScope,
} from "coli/lib/declarations/variable";
import { Type, Types } from "coli/lib";
import styled from "@emotion/styled";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentDeclarationAtom } from "../../states/declaration.state";
import { currentColiEditorOption } from "../../states/option.state";
import DeclartionTitle from "./common/title";
import CodeBlock from "../code-block";
import { stringfy, StringfyLanguage } from "../../../packages/export-string";
import { CodePreview } from "../code-preview";
import { CommentExpression } from "coli/lib/expressions/comment";

export interface VariableDeclaration {
  name: string;
  args?: {
    scope: VariableScope;
    variableType?: Type;
    value?: any;
  };
}

const returnExampleVariableCode = (args: {
  class: VariableClass | any;
  value: VariableDeclaration;
  language: StringfyLanguage;
}) => {
  const { class: variableClass, value, language } = args;
  const { name, args: values } = value;
  let code = "";
  code += `new ${variableClass.name}(\n"${name}", ${JSON.stringify(values)}\n)`;
  const comment = new CommentExpression({ style: "multi-line", content: code });
  return stringfy(comment, { language });
};

function VariableDeclaration(props: {
  id?: number;
  data: VariableDeclaration;
}) {
  const { id, data } = props;
  const setDeclaration = useSetRecoilState(
    currentDeclarationAtom<VariableDeclaration>("function", id)
  );
  const { language } = useRecoilValue(currentColiEditorOption);
  const [declarationValue, setDeclarationValue] = useState<VariableDeclaration>(
    {
      name: "",
      args: {
        scope: "let",
        variableType: Types.any,
        value: "",
      },
    }
  );

  useEffect(() => {
    setDeclarationValue(data);
  }, [data]);

  useEffect(() => {
    setDeclaration(data);
  }, [declarationValue]);

  return (
    <Positioner>
      <Wrapper>
        <DeclartionTitle lable="VARIABLE DECLARATION" />
        <CodeBlock>
          {stringfy(
            new VariableClass(declarationValue.name, declarationValue.args),
            {
              language,
            }
          )}
        </CodeBlock>
        <Body>
          {Object.keys(data).map((i, idx) => (
            <div className="coli-values" key={idx}></div>
          ))}
        </Body>
      </Wrapper>
      <CodePreview
        value={declarationValue}
        customValue={[declarationValue.name, declarationValue.args]}
        interface={VariableClass}
        codeHandler={returnExampleVariableCode}
      />
    </Positioner>
  );
}

export default VariableDeclaration;

const Positioner = styled.div`
  display: flex;
  margin-top: 32px;
  padding: 17px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;

  pre {
    width: 70%;
    font-size: 0.8em !important;
  }
`;

const Body = styled.div`
  margin-top: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;

  .coli-values {
    margin: 10px 0px;
    display: flex;
    align-items: center;

    label {
      flex: 1;
      font-size: 14px;
      color: #959595;
    }
  }
`;
