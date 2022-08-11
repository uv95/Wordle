import React, { useEffect } from "react";
import styled from "styled-components";
import Row from "./Row";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: center;
  padding: 2rem 0;
  margin: auto;
`;

function Board() {
  const { guesses, lettersColors } = useSelector((state) => state.word);

  return (
    <Wrapper>
      <Row colors={lettersColors[0]} guess={guesses[0]} />
      <Row colors={lettersColors[1]} guess={guesses[1]} />
      <Row colors={lettersColors[2]} guess={guesses[2]} />
      <Row colors={lettersColors[3]} guess={guesses[3]} />
      <Row colors={lettersColors[4]} guess={guesses[4]} />
      <Row colors={lettersColors[5]} guess={guesses[5]} />
    </Wrapper>
  );
}

export default Board;
