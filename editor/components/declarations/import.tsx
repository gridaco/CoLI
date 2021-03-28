import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import DeclartionTitle from "./common/title";
import { useSetRecoilState, useRecoilValue } from "recoil";
import AutoGrowInput from "../auto-grow-input";
import { currentDeclarationAtom } from "../../states/declaration.state";
import CodeBlock from "../code-block";
import {
  ImportDeclaration as ImportClass,
  ImportDefaultSpecifier,
  ImportSpecifier,
} from "coli/lib/declarations/import";
import { CodePreview } from "../code-preview";
import { stringfy, StringfyLanguage } from "../../../packages/export-string";
import { currentColiEditorOption } from "../../states/option.state";

export interface ImportDeclaration {
  specifiers?: Array<ImportDefaultSpecifier | ImportSpecifier>;
  source: string;
}

const fields = [
  {
    label: "default import",
    lookup: "ImportDefaultSpecifier",
  },
  {
    label: "import named",
    lookup: "ImportSpecifier",
  },
  {
    label: "from",
    lookup: "source",
  },
];

function ImportDeclaration(props: { id: number; data: ImportDeclaration }) {
  const { data, id } = props;
  const setDeclaration = useSetRecoilState(
    currentDeclarationAtom<ImportDeclaration>("function", id)
  );
  const editorOption = useRecoilValue(currentColiEditorOption);
  const [declarationValue, setDeclarationValue] = useState<ImportDeclaration>({
    specifiers: [],
    source: "",
  });

  useEffect(() => {
    setDeclarationValue(data);
  }, [data]);

  useEffect(() => {
    setDeclaration(data);
  }, [declarationValue]);

  const onChangeDeclarationValue = (v: string, n: string) => {
    if (n === "ImportDefaultSpecifier") {
      setDeclarationValue((d) => ({
        ...d,
        specifiers: [new ImportDefaultSpecifier({ local: v })],
      }));
    } else if (n === "ImportSpecifier") {
      const [prev, next] = v.split(' as ')
      setDeclarationValue(d => {
        return {
          ...d, 
          specifiers: [...d.specifiers, new ImportSpecifier({ import : prev, local : (next || prev) })]
        }
      })
    } else if (n === "source") {
      setDeclarationValue((d) => ({ ...d, source: v }));
    }
  };

  return (
    <Positioner>
      <Wrapper>
        <DeclartionTitle lable="IMPORT DECLARTIONS" />
        <CodeBlock>
          {stringfy(new ImportClass(declarationValue), {
            language: editorOption.lauangue as StringfyLanguage,
          })}
        </CodeBlock>
        <Body>
          {fields.map((i, _) => (
            <div className="coli-values" key={_}>
              <label>{i.label}</label>
              <AutoGrowInput
                placeholder="none"
                onChange={onChangeDeclarationValue}
                name={i.lookup}
              />
            </div>
          ))}
          {/* {Object.keys(data).map((i, _) => (
            <div className="coli-values" key={_}>
              <label>{fields[_]}</label>
              {data[i] instanceof Array ? (
                data[i].map((holder: string, _) => (
                  <AutoGrowInput
                    name={i}
                    onChange={onChangeDeclarationValue}
                    placeholder={holder}
                    key={_}
                    ix={_}
                  />
                ))
              ) : (
                <AutoGrowInput
                  name={i}
                  onChange={onChangeDeclarationValue}
                  placeholder={data[i]}
                />
              )}
            </div>
          ))} */}
        </Body>
      </Wrapper>
      <CodePreview value={declarationValue} interface={ImportClass} />
    </Positioner>
  );
}

export default ImportDeclaration;

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
