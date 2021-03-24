import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import DeclartionTitle from "./common/title";
import { useSetRecoilState, useRecoilValue } from "recoil";
import AutoGrowInput from "../auto-grow-input";
import { currentDeclarationAtom } from "../../states/declaration.state";
import CodeBlock from "../code-block";
import { ImportDeclaration } from "../../class/import";
export interface FunctionDeclaration {
  _default: string | null;
  _import: Array<string | null>;
  _from: string | null;
}

function FunctionDeclaration(props: { id: number; data: FunctionDeclaration }) {
  const { data, id } = props;
  const setDeclaration = useSetRecoilState(
    currentDeclarationAtom<FunctionDeclaration>("function", id)
  );

  useEffect(() => {
    setDeclaration(data);
  }, [data]);

  return (
    <Wrapper>
      <DeclartionTitle lable="IMPORT DECLARTIONS" />
      <CodeBlock>
        {new ImportDeclaration(data).call()}
      </CodeBlock>
      <Body>
        {Object.keys(data).map((i, _) => (
          <div className="coli-values" key={_}>
            <label>{i}</label>
            {data[i] instanceof Array ? (
              data[i].map((holder: string) => (
                <AutoGrowInput placeholder={holder} key={holder} />
              ))
            ) : (
              <AutoGrowInput placeholder={data[i]} />
            )}
          </div>
        ))}
      </Body>
    </Wrapper>
  );
}

export default FunctionDeclaration;

const Wrapper = styled.div`
  margin-top: 32px;
  padding: 17px 0px;
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
