import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import FlippingLetterBox from './FlippingLetterBox';

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
`;

function Row({ guess, colors, isWordChecked }) {
  const { numLetters, isNewGame } = useSelector((state) => state.word);

  return (
    <Wrapper>
      {[...Array(numLetters)].map((_, i) => (
        <FlippingLetterBox
          key={i}
          color={colors && colors[i]}
          isWordChecked={isWordChecked}
          letterIndex={i}
          isNewGame={isNewGame}
        >
          {guess[i]?.toUpperCase()}
        </FlippingLetterBox>
      ))}
    </Wrapper>
  );
}

export default Row;
