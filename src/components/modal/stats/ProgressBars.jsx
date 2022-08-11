import React, { useState, useEffect } from "react";
import Title from "../Title";
import styled from "styled-components";
import Text from "../Text";
import { useSelector } from "react-redux";

const Line = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
`;

const Bar = styled.div`
  width: 70%;
  height: 2rem;
  border-radius: 1rem;
  background-color: var(--color-btn);
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    background-color: var(--color-green);
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => (props.value / props.max) * 100}%;
  }
`;

function ProgressBars() {
  const [maxRepeatedValue, setMaxRepeatedValue] = useState(0);
  const { guessesNumberList } = useSelector((state) => state.word);
  const guessesDistribution = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    setMaxRepeatedValue(Math.max(...Object.values(guessesNumberList)));
  }, [guessesNumberList]);

  return (
    <>
      <Title>Guess distribution</Title>
      {guessesDistribution.map((guess) => (
        <Line key={guess}>
          <Text>{guess}</Text>{" "}
          <Bar max={maxRepeatedValue} value={guessesNumberList[guess]} />{" "}
          <Text bold>{guessesNumberList[guess]}</Text>
        </Line>
      ))}
    </>
  );
}

export default ProgressBars;
