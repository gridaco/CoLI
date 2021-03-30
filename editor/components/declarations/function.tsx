import React, { useEffect, useState } from "react";
import { FunctionDeclraration as FunctionClass } from "coli/lib/declarations/function";
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
import Selector from "../selector";
import AutoGrowInput from "../auto-grow-input";
import AutoGrowTextArea from "../auto-grow-textarea";
import { Identifier } from "coli/lib/ast/identifier";
import { BlockStatement } from "coli/lib/statements";

export interface FunctionDeclaration {
  name: string;
  args?: {
    params?: Identifier[];
    returnType?: Type;
    body?: BlockStatement;
  };
}

const returnExampleVariableCode = (args: {
  class: FunctionClass | any;
  value: FunctionDeclaration;
  language: StringfyLanguage;
}) => {
  const { class: variableClass, value, language } = args;
  const { name, args: values } = value;
  let code = "";
  code += `new ${variableClass.name}(\n"${name}", ${JSON.stringify(values)}\n)`;
  const comment = new CommentExpression({ style: "multi-line", content: code });
  return stringfy(comment, { language });
};

function FunctionDeclaration(props: {
  id?: number;
  data: FunctionDeclaration;
}) {
  const { id, data } = props;
  const setDeclaration = useSetRecoilState(
    currentDeclarationAtom<FunctionDeclaration>("function", id)
  );
  const { language } = useRecoilValue(currentColiEditorOption);
  const [declarationValue, setDeclarationValue] = useState<FunctionDeclaration>(
    {
      name: "sum",
      args: {},
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
        <DeclartionTitle lable="FUNCTION DECLARATION" />
        <CodeBlock>
          {stringfy(
            new FunctionClass(declarationValue.name, declarationValue.args),
            {
              language,
            }
          )}
        </CodeBlock>
        <Body>
          {/* <div className="coli-values" key={idx}>
                <label>{i}</label>
                <AutoGrowInput
                  placeholder={data[i]}
                  onChange={onChangeValue}
                  name={i}
                />
              </div> */}
        </Body>
      </Wrapper>
      <CodePreview
        value={declarationValue}
        customValue={[declarationValue.name, declarationValue.args]}
        interface={FunctionClass}
        codeHandler={returnExampleVariableCode}
      />
    </Positioner>
  );
}

export default FunctionDeclaration;

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
