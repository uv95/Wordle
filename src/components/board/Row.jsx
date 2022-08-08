import React from "react";
import styled from "styled-components";
import LetterBox from "./LetterBox";

const Wrapper = styled.div`
  display: flex;
`;

function Row() {
  const fiveLetters = [0, 1, 2, 3, 4];

  return (
    <Wrapper>
      {fiveLetters.map((letter) => (
        <LetterBox key={letter} />
      ))}
    </Wrapper>
  );
}

export default Row;
