import React, { useEffect } from "react";
import styled from "styled-components";
import Setting from "./modal/setting/Setting";
import Board from "./board/Board";
import Keyboard from "./Keyboard";
import Info from "./modal/info/Info";
import Stats from "./Stats";
import { useSelector } from "react-redux";
import Success from "./modal/success/Success";

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
  const { guessed } = useSelector((state) => state.word);
  return (
    <Wrapper>
      <Setting />
      <Stats />
      <Info />
      <Board />
      <Keyboard />
      {guessed && <Success />}
    </Wrapper>
  );
}

export default Container;
