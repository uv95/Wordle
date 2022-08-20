import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import Numbers from "./Numbers";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../store/theme/theme-actions";

const Section = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:not(:nth-of-type(2)) {
    margin-bottom: 1rem;

    &::after {
      content: "";
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
`;

function SettingContent() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const [text, setText] = useState({ 1: "", 2: "" });
  const { language } = useSelector((state) => state.language);

  const toggleTheme = () =>
    dispatch(setTheme(theme === "light" ? "dark" : "light"));

  useEffect(() => {
    language === "English" &&
      setText({ 1: "Number of letters", 2: "Dark theme" });
    language === "Russian" &&
      setText({ 1: "Количество букв", 2: "Темная тема" });
  }, [language]);

  return (
    <>
      <Section>
        <SectionTitle>{text[1]}</SectionTitle>
        <Numbers />
      </Section>
      <Section>
        <SectionTitle>{text[2]}</SectionTitle>
        <Toggle theme={theme} onClick={toggleTheme} />
      </Section>
    </>
  );
}

export default SettingContent;
