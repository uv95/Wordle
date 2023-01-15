import React from 'react';
import styled from 'styled-components';
import { LetterBoxColored } from '../../style-components/LetterBox';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

function WordExample({ word, colors }) {
  return (
    <Container>
      <LetterBoxColored color={colors[0]}>
        {word[0].toUpperCase()}
      </LetterBoxColored>
      <LetterBoxColored color={colors[1]}>
        {word[1].toUpperCase()}
      </LetterBoxColored>
      <LetterBoxColored color={colors[2]}>
        {word[2].toUpperCase()}
      </LetterBoxColored>
      <LetterBoxColored color={colors[3]}>
        {word[3].toUpperCase()}
      </LetterBoxColored>
      <LetterBoxColored color={colors[4]}>
        {word[4].toUpperCase()}
      </LetterBoxColored>
    </Container>
  );
}

export default WordExample;
