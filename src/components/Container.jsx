import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Setting from './modal/setting/Setting';
import Board from './board/Board';
import Keyboard from './Keyboard';
import Info from './modal/info/Info';
import Stats from './modal/stats/Stats';
import { useSelector } from 'react-redux';
import Finish from './modal/Finish';
import Message from './modal/Message';

const Wrapper = styled.main`
  min-height: calc(100vh - 6rem);
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-bg);
  color: var(--color-text);
`;

function Container() {
  const { isGuessed, numGuesses, wordExists } = useSelector(
    (state) => state.word
  );
  const [word, setWord] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    !wordExists && setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  }, [wordExists]);

  return (
    <Wrapper>
      <Setting />
      <Stats />
      <Info />
      {showMessage && <Message />}
      <Board word={word} />
      <Keyboard word={word} setWord={setWord} />
      {(isGuessed || numGuesses === 6) && <Finish />}
    </Wrapper>
  );
}

export default Container;
