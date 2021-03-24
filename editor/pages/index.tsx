import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { CodePreview } from "../components/code-preview";
import FunctionDeclaration from "../components/declarations/function";
import { useRouter } from "next/router";

function MainPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/function"), 500);
  }, [])

  return (
    <Wrapper>
      <img src="/assets/images/coli-shape.png" />
      <span>Loading the editor...</span>
    </Wrapper>
  );
}

export default MainPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  img {
    width: 90px;
  }

  span {
    font-size: 12px;
    color: #858585;
    margin-top: 20px;
  }
`;
