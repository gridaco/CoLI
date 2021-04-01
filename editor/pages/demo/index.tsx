import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const CoLiInterface = ["function", "import", "comment", "variable"];

function DemoListPage() {
  return (
    <Wrapper>
      <img src="/assets/images/coli-shape.png" />
      <h2>CoLi Demos</h2>
      <h4>Coli Interfaces</h4>
      <CardWrapper>
        {CoLiInterface.map((i) => (
          <Link href={`/demo/${i}`}>
            <div className="card">
              <label>{i}</label>
            </div>
          </Link>
        ))}
      </CardWrapper>
    </Wrapper>
  );
}

export default DemoListPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5em 10em;
  h4 {
    font-size: 28px;
    color: #707070;
  }
`;

const CardWrapper = styled.div`
  padding: 0;
  list-style-type: none;
  width: 99%;
  margin: 0 auto;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(425px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2.5rem;

  .card {
    cursor: pointer;
    background-color: #f0eeee;
    height: 150px;
    padding: 2em;
    box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease-out;

    label {
      font-size: 24px;
      font-weight: bold;
    }

    &:hover {
      transform: translateY(-5px) scale(1.005) translateZ(0);
    }
  }
`;
