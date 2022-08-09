import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../store/language/language-actions";

const Wrapper = styled(Button)`
  border-radius: 1rem;
  width: 15rem;
  background-color: ${(props) =>
    props.lang === props.language ? "var(--color-green)" : "var(--color-btn)"};

  &:hover {
    background-color: ${(props) =>
      props.lang === props.language
        ? "var(--color-green)"
        : "var(--color-btn-hover)"}
`;

const ImgContainer = styled.div`
  width: 2rem;
`;

function Option({ lang, flag }) {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const { language } = useSelector((state) => state.language);

  return (
    <Wrapper
      hover={hover}
      lang={lang.eng}
      language={language}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => dispatch(setLanguage(lang.eng))}
    >
      <ImgContainer>
        <img src={flag} alt="country flag" />
      </ImgContainer>
      {lang.long}
    </Wrapper>
  );
}
export default Option;
