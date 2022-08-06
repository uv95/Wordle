import React from "react";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
`;

const Key = styled.div`
  height: 5rem;
  min-width: 4rem;
  margin: 0.5rem;
  padding: 0 1rem;
  border-radius: 20%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-btn);
  cursor: pointer;
`;

function Keyboard() {
  const firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const secondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const thirdRow = ["enter", "z", "x", "c", "v", "b", "n", "m"];

  return (
    <Wrapper>
      <Row>
        {firstRow.map((key) => (
          <Key key={key}>{key.toUpperCase()}</Key>
        ))}
      </Row>
      <Row>
        {secondRow.map((key) => (
          <Key key={key}>{key.toUpperCase()}</Key>
        ))}
      </Row>
      <Row>
        {thirdRow.map((key) => (
          <Key key={key}>{key.toUpperCase()}</Key>
        ))}
        <Key>
          <FiArrowLeft />
        </Key>
      </Row>
    </Wrapper>
  );
}

export default Keyboard;
