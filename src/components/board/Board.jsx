import React from "react";
import styled from "styled-components";
import Row from "./Row";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  align-items: center;
  padding: 2rem 0;
  margin: auto;
`;

function Board() {
  const fiveLettersBoard = [0, 1, 2, 3, 4];
  return (
    <Wrapper>
      {fiveLettersBoard.map((row) => (
        <Row key={row} />
      ))}
    </Wrapper>
  );
}

export default Board;
