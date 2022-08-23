import styled from "styled-components";
import React from "react";
import { increase } from "./animation";

const Container = styled.div`
  display: flex;
  gap: 0.7rem;
  margin: auto;
`;

const Box = styled.div`
  background: var(--color-btn);
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 0.5rem;
  animation-name: ${increase};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-delay: ${(props) => {
    if (props.num === 1) return "0s";
    if (props.num === 2) return ".5s";
    if (props.num === 3) return "1s";
  }};
`;

function Spinner() {
  return (
    <Container>
      <Box num={1} />
      <Box num={2} />
      <Box num={3} />
    </Container>
  );
}

export default Spinner;
