import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import FlippingLetterBox from "./FlippingLetterBox";

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
`;

function Row({ guess, colors, wordChecked }) {
  const { lettersNumber, newGame } = useSelector((state) => state.word);

  const obj = {
    5: [0, 1, 2, 3, 4],
    6: [0, 1, 2, 3, 4, 5],
    7: [0, 1, 2, 3, 4, 5, 6],
    8: [0, 1, 2, 3, 4, 5, 6, 7],
    9: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  };

  return (
    <Wrapper>
      {obj[lettersNumber].map((letter, i) => (
        <FlippingLetterBox
          key={letter}
          color={colors && colors[i]}
          wordChecked={wordChecked}
          turn={i}
          newGame={newGame}
        >
          {guess[i]?.toUpperCase()}
        </FlippingLetterBox>
      ))}
    </Wrapper>
  );
}

export default Row;
