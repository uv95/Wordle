import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const Letter = styled.div`
  height: 6rem;
  width: 6rem;
  margin: 0.5rem;
  border-radius: 20%;
  border: 0.2rem solid var(--color-btn);
`;

function Row() {
  const fiveLetters = [0, 1, 2, 3, 4];

  return (
    <Wrapper>
      {fiveLetters.map((letter) => (
        <Letter key={letter} />
      ))}
    </Wrapper>
  );
}

export default Row;
