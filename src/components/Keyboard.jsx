import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { languages, englishWords } from "../config";
import Button from "./Button";
import {
  addLetter,
  removeLetter,
  checkWord,
  checkWordExistence,
  clearCurrentWord,
} from "../store/word/word-actions";

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
  background-color: ${(props) => {
    if (props.color === "gray") return "var(--color-gray)";
    if (props.color === "green") return "var(--color-green)";
    if (props.color === "yellow") return "var(--color-yellow)";
    return "var(--color-btn)";
  }};
`;

function Keyboard({ word, setWord }) {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.language);
  const {
    guesses,
    guessesNumber,
    lettersNumber,
    newGame,
    keyboard,
    wordExists,
    currentWord,
  } = useSelector((state) => state.word);

  useEffect(() => {
    const setNewWord = () => {
      const randomNumber = Math.floor(
        Math.random() * englishWords[lettersNumber].length
      );
      setWord(englishWords[lettersNumber][randomNumber]);
    };
    newGame && setNewWord();
  }, [lettersNumber, newGame, dispatch]);

  const checkExistence = () => {
    dispatch(
      checkWordExistence(
        englishWords[lettersNumber],
        guesses[guessesNumber].length,
        lettersNumber
      )
    );
  };

  const setKeyColor = (key) => {
    if (keyboard.green.includes(key)) return "green";
    if (keyboard.gray.includes(key)) return "gray";
    if (keyboard.yellow.includes(key)) return "yellow";
  };

  useEffect(() => {
    wordExists && currentWord.length && dispatch(checkWord(word));
  }, [wordExists, word, dispatch, currentWord]);

  useEffect(() => {
    !wordExists && dispatch(clearCurrentWord());
  }, [wordExists, dispatch]);

  return (
    <Wrapper>
      <Row>
        {languages[language.toLowerCase()].keyboard.first.map((key) => (
          <KeyBtn
            color={setKeyColor(key)}
            onClick={() => dispatch(addLetter(key))}
            key={key}
          >
            {key.toUpperCase()}
          </KeyBtn>
        ))}
      </Row>
      <Row>
        {languages[language.toLowerCase()].keyboard.second.map((key) => (
          <KeyBtn
            color={setKeyColor(key)}
            onClick={() => dispatch(addLetter(key))}
            key={key}
          >
            {key.toUpperCase()}
          </KeyBtn>
        ))}
      </Row>
      <Row>
        <KeyBtn onClick={checkExistence}>
          {languages[language.toLowerCase()].keyboard.enter.toUpperCase()}
        </KeyBtn>
        {languages[language.toLowerCase()].keyboard.third.map((key) => (
          <KeyBtn
            color={setKeyColor(key)}
            onClick={() => dispatch(addLetter(key))}
            key={key}
          >
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
