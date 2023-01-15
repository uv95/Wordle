import styled from 'styled-components';
import React from 'react';
import { increase } from './animation';

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
  animation-delay: ${(props) => `${props.delay}s`};
`;

function Spinner() {
  return (
    <Container>
      <Box delay={0} />
      <Box delay={0.5} />
      <Box delay={1} />
    </Container>
  );
}

export default Spinner;
