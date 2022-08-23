import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalContainer from "./ModalContainer";
import Title from "./Title";
import StatsContentEng from "./stats/StatsContentEng";
import StatsContentRus from "./stats/StatsContentRus";
import { useSelector, useDispatch } from "react-redux";
import { resetGame } from "../../store/word/word-actions";

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
    props.theme === "light"
      ? "rgba(255, 255, 255, 0.4)"
      : "rgba(0, 0, 0, 0.4)"};
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
  const [title, setTitle] = useState({ 1: "", 2: "" });

  const { language } = useSelector((state) => state.language);
  const { guessed, usedWordsList } = useSelector((state) => state.word);

  useEffect(() => {
    language === "English" && setTitle({ 1: "You won! 🏆", 2: "You lost 😟" });
    language === "Russian" &&
      setTitle({ 1: "Вы выиграли! 🏆", 2: "Вы проиграли 😟" });
  }, [language]);
  return (
    <Wrapper>
      <ModalContainer>
        <Title>{guessed ? title[1] : title[2]}</Title>
        {language === "English" && <StatsContentEng />}
        {language === "Russian" && <StatsContentRus />}
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
