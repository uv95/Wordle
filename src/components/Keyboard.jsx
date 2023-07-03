import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { languages, englishWords, russianWords } from '../utils';
import {
  addLetter,
  removeLetter,
  checkWord,
  checkWordExistence,
  clearCurrentWord,
  setWords,
} from '../store/word/word-actions';
import { KeyBtn } from './style-components/Button';
import { useTranslation } from 'react-i18next';

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

function Keyboard({ word, setWord }) {
  const dispatch = useDispatch();
  const {
    guesses,
    numGuesses,
    numLetters,
    isNewGame,
    keyboard,
    wordExists,
    currentWord,
    allWords,
  } = useSelector((state) => state.word);

  const { i18n } = useTranslation();
  const i18nLanguage = i18n.language.slice(0,2)
  useEffect(() => {
    i18nLanguage === 'en' && dispatch(setWords(englishWords));
    i18nLanguage === 'ru' && dispatch(setWords(russianWords));
  }, [i18nLanguage, dispatch]);

  useEffect(() => {
    const setNewWord = () => {
      if (allWords[numLetters]) {
        const randomNumber = Math.floor(
          Math.random() * allWords[numLetters].length
        );
        setWord(allWords[numLetters][randomNumber]);
      }
    };
    isNewGame && setNewWord();
  }, [numLetters, isNewGame, dispatch, allWords, setWord]);

  useEffect(() => {
    wordExists && currentWord.length && dispatch(checkWord(word));
  }, [wordExists, word, dispatch, currentWord]);

  useEffect(() => {
    !wordExists && dispatch(clearCurrentWord());
  }, [wordExists, dispatch]);

  const checkExistence = () => {
    dispatch(
      checkWordExistence(
        allWords[numLetters],
        guesses[numGuesses].length,
        numLetters
      )
    );
  };

  const setKeyColor = (key) => {
    if (keyboard.green.includes(key)) return 'green';
    if (keyboard.gray.includes(key)) return 'gray';
    if (keyboard.yellow.includes(key)) return 'yellow';
  };

  return (
    <Wrapper>
      <Row>
        {languages[i18nLanguage].keyboard.first.map((key) => (
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
        {languages[i18nLanguage].keyboard.second.map((key) => (
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
        <KeyBtn onClick={checkExistence} isEnter>
          {languages[i18nLanguage].keyboard.enter.toUpperCase()}
        </KeyBtn>
        {languages[i18nLanguage].keyboard.third.map((key) => (
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
            style={{ minWidth: '1.5rem' }}
            onClick={() => dispatch(removeLetter())}
          />
        </KeyBtn>
      </Row>
    </Wrapper>
  );
}

export default Keyboard;
