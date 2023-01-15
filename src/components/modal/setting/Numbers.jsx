import React from 'react';
import styled from 'styled-components';
import { Button } from '../../style-components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setWordLength } from '../../../store/word/word-actions';

const FlexContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: 2rem;

  @media (max-width: 39em) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 18em) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Number = styled(Button)`
  background-color: ${(props) =>
    props.currentNum ? 'var(--color-green)' : 'var(--color-btn)'};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.currentNum ? 'var(--color-green)' : 'var(--color-btn-hover)'};
  }

  @media (max-width: 26em) {
    height: 3rem;
    width: 2rem;
    font-size: 1.5rem;
  }
`;

function Numbers() {
  const dispatch = useDispatch();
  const { numLetters } = useSelector((state) => state.word);
  const numbers = [5, 6, 7, 8, 9, 10];

  return (
    <FlexContainer>
      {numbers.map((num) => (
        <Number
          key={num}
          currentNum={num === numLetters}
          onClick={() => dispatch(setWordLength(num))}
        >
          {num}
        </Number>
      ))}
    </FlexContainer>
  );
}

export default Numbers;
