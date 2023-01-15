import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { resetGame } from '../../store/word/word-actions';
import StatsContent from './stats/StatsContent';
import Title from '../style-components/Title';
import ModalContainer from '../style-components/ModalContainer';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme === 'light'
      ? 'rgba(255, 255, 255, 0.4)'
      : 'rgba(0, 0, 0, 0.4)'};
`;

const PlayAgainButton = styled.div`
  margin: 2rem auto 0 auto;
  background-color: var(--color-green);
  border-radius: 1rem;
  height: 4rem;
  width: 15rem;
  font-size: 2rem;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--color-green-hover);
  }
`;

function Finish() {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.language);
  const { isGuessed, usedWordsList } = useSelector((state) => state.word);

  const text = useMemo(() => {
    if (language === 'English')
      return ['You won! 🏆', 'You lost 😟', 'Play again', 'Solution:'];
    if (language === 'Russian')
      return [
        'Вы выиграли! 🏆',
        'Вы проиграли 😟',
        'Играть снова',
        'Загаданное слово:',
      ];
  }, [language]);

  return (
    <Wrapper>
      <ModalContainer>
        <Title>{isGuessed ? text[0] : text[1]}</Title>
        <StatsContent />
        <h2>
          {text[3]} {usedWordsList[usedWordsList.length - 1].toUpperCase()}
        </h2>
        <PlayAgainButton onClick={() => dispatch(resetGame())}>
          {text[2]}
        </PlayAgainButton>
      </ModalContainer>
    </Wrapper>
  );
}

export default React.memo(Finish);
