import React, { useState } from "react";
import styled from "@emotion/styled";

type LanguageType = "ts" | "py" | "dart";
type ViewType = "block" | "grid"

function Header() {
  const [viewType, setViewType] = useState<ViewType>("block");
  const [language, setLanguage] = useState<LanguageType>("ts");

  return (
    <Wrapper>
      <div className="view-type">
        <span
          className={viewType == "block" ? "active" : ""}
          onClick={() => setViewType("block")}
        >
          Block
        </span>
        <span
          className={viewType == "grid" ? "active" : ""}
          onClick={() => setViewType("grid")}
        >
          Grid
        </span>
      </div>
      <ColiOptions>
        <div className="in-playground">
          <select onChange={e => setLanguage(e.target.value as LanguageType)}>
            <option value="ts">playground.tsx</option>
            <option value="py">playground.py</option>
            <option value="dart">playground.dart</option>
          </select>
          <span>prettier</span>
        </div>

        <div className="coli-options">
          <img src="/assets/icons/download.svg" />
          <img src="/assets/icons/copy.svg" />
        </div>
      </ColiOptions>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  padding-top: 35px;
  padding-left: 175px;
  display: flex;

  .view-type {
    flex: 1;

    span {
      cursor: pointer;
      margin-right: 17px;
      font-weight: bold;
      font-size: 12px;
      color: #c7c7c7;
    }

    .active {
      color: #000;
    }
  }
`;

const ColiOptions = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin: 0px 46px;
  font-size: 12px;

  .in-playground {
    display: flex;
    align-items: center;
    justify-content: center;

    select {
      outline: none;
      border: none;
    }

    span {
      &:last-of-type {
        margin-left: 40px;
      }
    }

    img {
      cursor: pointer;
      margin-left: 4px;
    }
  }

  .coli-options {
    img {
      cursor: pointer;
      margin-left: 25px;
    }
  }
`;
