import React from 'react';
import styled from 'styled-components';
import Toggle from '../../style-components/Toggle';
import Numbers from './Numbers';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../../store/theme/theme-actions';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const theme = useSelector((state) => state.theme);

  const toggleTheme = () =>
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  return (
    <>
      <Section>
        <SectionTitle>{t('settings-content.0')}</SectionTitle>
        <Numbers />
      </Section>
      <Section>
        <SectionTitle>{t('settings-content.1')}</SectionTitle>
        <Toggle theme={theme} onClick={toggleTheme} />
      </Section>
    </>
  );
}

export default SettingContent;
