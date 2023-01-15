import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Toggle from '../../style-components/Toggle';
import Numbers from './Numbers';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../../store/theme/theme-actions';

const Section = styled.div`
  min-height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:not(:nth-of-type(2)) {
    margin-bottom: 1rem;

    &::after {
      content: '';
      background-color: var(--color-btn);
      opacity: 0.5;
      height: 0.1rem;
      width: 100%;
      position: absolute;
      bottom: -0.5rem;
      left: 0;
    }
  }
`;

const SectionTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 500;

  @media (max-width: 29em) {
    font-size: 2rem;
  }
  @media (max-width: 26em) {
    font-size: 1.8rem;
  }
  @media (max-width: 18em) {
    font-size: 1.5rem;
  }
`;

function SettingContent() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const [text, setText] = useState([]);
  const { language } = useSelector((state) => state.language);

  const toggleTheme = () =>
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    language === 'English' && setText(['Number of letters', 'Dark theme']);
    language === 'Russian' && setText(['Количество букв', 'Темная тема']);
  }, [language]);

  return (
    <>
      <Section>
        <SectionTitle>{text[0]}</SectionTitle>
        <Numbers />
      </Section>
      <Section>
        <SectionTitle>{text[1]}</SectionTitle>
        <Toggle theme={theme} onClick={toggleTheme} />
      </Section>
    </>
  );
}

export default SettingContent;
