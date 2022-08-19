import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Setting from "./modal/setting/Setting";
import Board from "./board/Board";
import Keyboard from "./Keyboard";
import Info from "./modal/info/Info";
import Stats from "./modal/stats/Stats";
import { useSelector } from "react-redux";
import Finish from "./modal/Finish";
import Message from "./modal/Message";

const Wrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 6rem);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-bg);
  color: var(--color-text);
`;

function Container() {
  const { guessed, guessesNumber, wordExists } = useSelector(
    (state) => state.word
  );
  const [word, setWord] = useState("");
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
      {(guessed || guessesNumber === 6) && <Finish />}
    </Wrapper>
  );
}

export default Container;
