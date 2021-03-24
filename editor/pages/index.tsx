import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { keyframes } from "@emotion/react";

function MainPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/function"), 1000);
  }, [])

  return (
    <Wrapper>
      <img src="/assets/images/coli-shape.png" />
      <span>Loading the editor...</span>
    </Wrapper>
  );
}

export default MainPage;

const fadeOut = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0.25;
    }
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  animation: ${fadeOut} 1s infinite linear alternate;

  img {
    width: 90px;
  }

  span {
    font-size: 12px;
    color: #858585;
    margin-top: 20px;
  }
`;
