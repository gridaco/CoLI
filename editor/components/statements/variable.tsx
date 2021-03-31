import React, { useEffect, useState } from "react";
import { VariableDeclaration as VariableClass } from "coli/lib/declarations/variable";
import { VariableKind as VariableScope } from "coli/lib/_internal/kinds/variable-kind";
import { Type, Types } from "coli/lib";
import styled from "@emotion/styled";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentDeclarationAtom } from "../../states/declaration.state";
import { currentColiEditorOption } from "../../states/option.state";
import DeclartionTitle from "../declarations/common/title";
import CodeBlock from "../code-block";
import { stringfy, StringfyLanguage } from "../../../packages/export-string";
import { CodePreview } from "../code-preview";
import { CommentExpression } from "coli/lib/expressions/comment";
import Selector from "../selector";
import AutoGrowInput from "../auto-grow-input";
import AutoGrowTextArea from "../auto-grow-textarea";
import { variableStatementAtom } from "../../states/statement.state";

export interface VariableStatement {
  name: string;
  args?: {
    kind: VariableScope;
    variableType?: Type;
    value?: any;
  };
}

const returnExampleVariableCode = (args: {
  class: VariableClass | any;
  value: VariableStatement;
  language: StringfyLanguage;
}) => {
  const { class: variableClass, value, language } = args;
  const { name, args: values } = value;
  let code = "";
  code += `new ${variableClass.name}(\n"${name}", ${JSON.stringify(values)}\n)`;
  const comment = new CommentExpression({ style: "multi-line", content: code });
  return stringfy(comment, { language });
};

const variableScopeSelector = [
  {
    label: "const",
    value: "const",
  },
  {
    label: "let",
    value: "let",
  },
  {
    label: "var",
    value: "var",
  },
];

function VariableStatement(props: {
  id?: number;
  data: VariableStatement;
}) {
  const { id, data } = props;
  const setGlobalVariableStatementValue = useSetRecoilState(variableStatementAtom);
  const { language } = useRecoilValue(currentColiEditorOption);
  const [declarationValue, setDeclarationValue] = useState<VariableStatement>(
    {
      name: "",
      args: {
        kind: "let",
        variableType: Types.any,
        value: "",
      },
    }
  );

  useEffect(() => {
    setDeclarationValue(data);
  }, [data]);

  useEffect(() => {
    // TODO CHANGE PUSH CURRENT DATA ( Declaration Value )
    // setDeclaration(data);
  }, [declarationValue]);

  const onChangeValue = (v: any, n: string, isArgs: boolean = false) => {
    if (isArgs) {
      setDeclarationValue((d) => ({
        ...d,
        args: {
          ...d.args,
          [n]: v || data[n],
        },
      }));
    } else {
      setDeclarationValue((d) => ({
        ...d,
        [n]: v || data[n],
      }));
    }
  };

  const returnArgumentsFiledMappingComponent = (
    k: keyof VariableStatement["args"]
  ) => {
    switch (k) {
      case "kind":
        return (
          <Selector
            onChange={(v) => onChangeValue(v, k, true)}
            value={declarationValue.args.kind}
            options={variableScopeSelector}
          />
        );
      case "value":
        return (
          <AutoGrowTextArea
            onChange={(v) => onChangeValue(v, k, true)}
            placeholder={data["args"].value}
            value={declarationValue.args.value}
          />
        );
      case "variableType":
        const variableTypeSelector = Types.getAllTypes().map((i) => ({
          label: i,
          value: i,
        }));
        return (
          <Selector
            onChange={(v) => onChangeValue(Types[v], k, true)}
            value={declarationValue.args.variableType.keyword}
            options={variableTypeSelector}
          />
        );
    }
  };

  return (
    <Positioner>
      <Wrapper>
        <DeclartionTitle lable="VARIABLE STATEMENTS" />
        <CodeBlock>
          {stringfy(
            new VariableClass(declarationValue.name, declarationValue.args),
            {
              language,
            }
          )}
        </CodeBlock>
        <Body>
          {Object.keys(data).map((i, idx) =>
            data[i] instanceof Object ? (
              Object.keys(data[i]).map((innerData: any) => (
                <div
                  className="coli-values"
                  key={idx}
                  style={
                    innerData === "value"
                      ? {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }
                      : null
                  }
                >
                  <label>
                    {i} : {innerData}
                  </label>
                  {returnArgumentsFiledMappingComponent(innerData)}
                </div>
              ))
            ) : (
              <div className="coli-values" key={idx}>
                <label>{i}</label>
                <AutoGrowInput
                  placeholder={data[i]}
                  onChange={onChangeValue}
                  name={i}
                />
              </div>
            )
          )}
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

export default VariableStatement;

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
