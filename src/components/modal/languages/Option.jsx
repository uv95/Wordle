import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { resetGame } from '../../../store/word/word-actions';
import { Button } from '../../style-components/Button';
import { useTranslation } from 'react-i18next';

const Wrapper = styled(Button)`
  border-radius: 1rem;
  width: 15rem;
  background-color: ${(props) =>
    props.i18n === props.language ? 'var(--color-green)' : 'var(--color-btn)'};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.i18n === props.language
        ? 'var(--color-green)'
        : 'var(--color-btn-hover)'};
  }
  @media (max-width: 26em) {
    font-size: 1.5rem;
    border-radius: 0.5rem;
    width: 10rem;
  }
`;

const ImgContainer = styled.div`
  width: 2rem;

  @media (max-width: 26em) {
    width: 1.5rem;
  }
`;

function Option({ lang, flag }) {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    dispatch(resetGame());
  };

  return (
    <Wrapper
      hover={hover}
      i18n={i18n.language}
      language={lang.short}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={changeLang}
    >
      <ImgContainer>
        <img src={flag} alt={t('country-flag')} />
      </ImgContainer>
      {lang.long}
    </Wrapper>
  );
}
export default Option;
