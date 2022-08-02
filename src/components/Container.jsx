import React from "react";
import styled from "styled-components";
import Setting from "./Setting";
import Board from "./board/Board";
import Keyboard from "./keyboard/Keyboard";
import Info from "./Info";
import Stats from "./Stats";

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`;

function Container() {
  return (
    <Wrapper>
      <Setting />
      <Stats />
      <Info />
      <Board />
      <Keyboard />
    </Wrapper>
  );
}

export default Container;
