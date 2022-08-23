import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../Button";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../../store/language/language-actions";
import { resetGame } from "../../../store/word/word-actions";

const Wrapper = styled(Button)`
  border-radius: 1rem;
  width: 15rem;
  background-color: ${(props) =>
    props.lang === props.language ? "var(--color-green)" : "var(--color-btn)"};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.lang === props.language
        ? "var(--color-green)"
        : "var(--color-btn-hover)"};
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
  const { language } = useSelector((state) => state.language);

  const changeLang = () => {
    dispatch(setLanguage(lang.eng));
    dispatch(resetGame());
  };

  return (
    <Wrapper
      hover={hover}
      lang={lang.eng}
      language={language}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={changeLang}
    >
      <ImgContainer>
        <img src={flag} alt="country flag" />
      </ImgContainer>
      {lang.long}
    </Wrapper>
  );
}
export default Option;
