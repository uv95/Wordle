import React from "react";
import styled from "styled-components";
import LetterBox from "./LetterBox";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  display: flex;
`;

function Row({ guess, colors }) {
  const { lettersNumber } = useSelector((state) => state.word);

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
        <LetterBox color={colors && colors[i]} key={letter}>
          {guess[i]?.toUpperCase()}
        </LetterBox>
      ))}
    </Wrapper>
  );
}

export default Row;
