import React, { useEffect } from "react";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { languages, englishWords, russianWords } from "../config";
import Button from "./Button";
import {
  addLetter,
  removeLetter,
  checkWord,
  checkWordExistence,
  clearCurrentWord,
  setWords,
} from "../store/word/word-actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  padding-bottom: 4rem;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  max-width: 100%;
  justify-content: center;
`;

const KeyBtn = styled(Button)`
  min-width: ${(props) => (props.enter ? "7.5rem" : "4rem")};
  height: 5rem;
  font-size: 2rem;
  background-color: ${(props) => {
    if (props.color === "gray") return "var(--color-gray)";
    if (props.color === "green") return "var(--color-green)";
    if (props.color === "yellow") return "var(--color-yellow)";
    return "var(--color-btn)";
  }};
  transition: background-color 0.2s;
  padding: ${(props) => (props.enter ? "0 0.5rem" : "0 1.2rem")};

  &:hover {
    background-color: ${(props) => {
      if (props.color === "gray") return "var(--color-gray)";
      if (props.color === "green") return "var(--color-green)";
      if (props.color === "yellow") return "var(--color-yellow)";
      return "var(--color-btn-hover)";
    }};
  }

  @media (max-width: 35em) {
    min-width: ${(props) => (props.enter ? "7.5rem" : "3.5rem")};
  }
  @media (max-width: 30em) {
    min-width: ${(props) => (props.enter ? "6rem" : "8%")};
    border-radius: 0.5rem;
    font-size: 1.9rem;
  }
  @media (max-width: 26em) {
    font-size: 1.6rem;
    min-width: ${(props) => (props.enter ? "5rem" : "6%")};
    width: ${(props) => (props.enter ? "12rem" : "13%")};
  }
  @media (max-width: 17em) {
    padding: ${(props) => (props.enter ? "0" : "0 0.5rem")};
    font-size: 1.2rem;
  }
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
    words,
  } = useSelector((state) => state.word);

  useEffect(() => {
    language === "English" && dispatch(setWords(englishWords));
    language === "Russian" && dispatch(setWords(russianWords));
  }, [language, dispatch]);

  useEffect(() => {
    const setNewWord = () => {
      if (words[lettersNumber]) {
        const randomNumber = Math.floor(
          Math.random() * words[lettersNumber].length
        );
        setWord(words[lettersNumber][randomNumber]);
      }
    };
    newGame && setNewWord();
  }, [lettersNumber, newGame, dispatch, words, setWord]);

  useEffect(() => {
    wordExists && currentWord.length && dispatch(checkWord(word));
  }, [wordExists, word, dispatch, currentWord]);

  useEffect(() => {
    !wordExists && dispatch(clearCurrentWord());
  }, [wordExists, dispatch]);

  const checkExistence = () => {
    dispatch(
      checkWordExistence(
        words[lettersNumber],
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
        <KeyBtn onClick={checkExistence} enter>
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
          <FiArrowLeft
            style={{ minWidth: "1.5rem" }}
            onClick={() => dispatch(removeLetter())}
          />
        </KeyBtn>
      </Row>
    </Wrapper>
  );
}

export default Keyboard;
