import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import FlippingLetterBox from './FlippingLetterBox';

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
`;

function Row({ guess, colors, wordChecked }) {
  const { lettersNumber, newGame } = useSelector((state) => state.word);

  return (
    <Wrapper>
      {[...Array(lettersNumber)].map((letter, i) => (
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
