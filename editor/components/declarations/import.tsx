import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import DeclartionTitle from "./common/title";
import { useSetRecoilState, useRecoilValue } from "recoil";
import AutoGrowInput from "../auto-grow-input";
import { currentDeclarationAtom } from "../../states/declaration.state";
import CodeBlock from "../code-block";
import { ImportDeclaration as ImportClass } from "coli/lib/declarations/import";
import { CodePreview } from "../code-preview";

export interface ImportDeclaration {
  _default: string | null;
  _import: Array<string | null>;
  _from: string | null;
}

const fields = ["default import", "import named", "from"];

function ImportDeclaration(props: { id: number; data: ImportDeclaration }) {
  const { data, id } = props;
  const setDeclaration = useSetRecoilState(
    currentDeclarationAtom<ImportDeclaration>("function", id)
  );
  const [declarationValue, setDeclarationValue] = useState<ImportDeclaration>({
    _import: [],
    _default: null,
    _from: null,
  });

  useEffect(() => {
    setDeclarationValue(data);
  }, [data]);

  useEffect(() => {
    setDeclaration(data);
  }, [declarationValue]);

  const onChangeDeclarationValue = (v: string, n: string, k?: number) => {
    setDeclarationValue((d) => {
      const isArray = data[n] instanceof Array;

      if (isArray) {
        const _import = data[n].map((i, ix) => {
          if (ix === k) {
            return v === "" ? i : v;
          } else if (d[n][ix] != i) {
            return d[n][ix];
          } else {
            return i;
          }
        });

        return {
          ...d,
          _import,
        };
      } else {
        return {
          ...d,
          [n]: v == "" ? data[n] : v,
        };
      }
    });
  };

  return (
    <Positioner>
      <Wrapper>
        <DeclartionTitle lable="IMPORT DECLARTIONS" />
        <CodeBlock>
          THIS FEATURE IS BLOCKED
          {/* {new ImportClass(declarationValue).exportAs()} */}
        </CodeBlock>
        <Body>
          {Object.keys(data).map((i, _) => (
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
          ))}
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
