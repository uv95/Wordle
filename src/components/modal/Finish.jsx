import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import ModalContainer from "./ModalContainer";
import Title from "./Title";
import StatsContent from "./stats/StatsContent";
import { useSelector, useDispatch } from "react-redux";
import { resetGame } from "../../store/word/word-actions";

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
  const { guessed, usedWordsList } = useSelector((state) => state.word);
  return (
    <Wrapper>
      <ModalContainer>
        <Title>{guessed ? "You won! 🏆" : "You lost 😟"}</Title>
        <StatsContent />
        <h2>
          Solution: {usedWordsList[usedWordsList.length - 1].toUpperCase()}
        </h2>
        <PlayAgainButton onClick={() => dispatch(resetGame())}>
          Play again
        </PlayAgainButton>
      </ModalContainer>
    </Wrapper>
  );
}

export default Finish;
