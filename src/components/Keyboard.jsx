import React, { useEffect } from "react";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { languages } from "../config";
import Button from "./Button";
import { addLetter, removeLetter, check } from "../store/word/word-actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const KeyBtn = styled(Button)`
  height: 5rem;
  min-width: 4rem;
  font-size: 2rem;
`;

function Keyboard() {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.language);
  const { guesses, guessesNumber, lettersNumber } = useSelector(
    (state) => state.word
  );

  const checkWord = () => {
    dispatch(check(guesses[guessesNumber].length, lettersNumber));
  };

  return (
    <Wrapper>
      <Row>
        {languages[language.toLowerCase()].keyboard.first.map((key) => (
          <KeyBtn onClick={() => dispatch(addLetter(key))} key={key}>
            {key.toUpperCase()}
          </KeyBtn>
        ))}
      </Row>
      <Row>
        {languages[language.toLowerCase()].keyboard.second.map((key) => (
          <KeyBtn onClick={() => dispatch(addLetter(key))} key={key}>
            {key.toUpperCase()}
          </KeyBtn>
        ))}
      </Row>
      <Row>
        <KeyBtn onClick={checkWord}>
          {languages[language.toLowerCase()].keyboard.enter.toUpperCase()}
        </KeyBtn>
        {languages[language.toLowerCase()].keyboard.third.map((key) => (
          <KeyBtn onClick={() => dispatch(addLetter(key))} key={key}>
            {key.toUpperCase()}
          </KeyBtn>
        ))}
        <KeyBtn>
          <FiArrowLeft onClick={() => dispatch(removeLetter())} />
        </KeyBtn>
      </Row>
    </Wrapper>
  );
}

export default Keyboard;
