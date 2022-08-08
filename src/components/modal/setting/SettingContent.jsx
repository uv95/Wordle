import React from "react";
import styled from "styled-components";
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

const Input = styled.input.attrs({
  type: "number",
  min: "5",
  max: "10",
  defaultValue: 5,
})`
  height: 4rem;
  width: 7rem;
  border: 0.1rem solid var(--color-btn);
  border-radius: 0.6rem;
  padding: 1rem;
  font-size: 2rem;

  &:focus {
    outline: none;
  }
`;

const Toggle = styled.div`
  width: 6rem;
  height: 3rem;
  background-color: ${(props) =>
    props.theme === "light" ? "var(--color-btn)" : "var(--color-green)"};
  border-radius: 2rem;
  margin-right: 0.5rem;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;

  &:after {
    content: "";
    background-color: var(--color-white);
    height: 2.6rem;
    width: 2.6rem;
    position: absolute;
    top: 0.2rem;
    left: ${(props) => (props.theme === "light" ? "0.2rem" : "3.2rem")};
    border-radius: 2rem;
    transition: all 0.2s;
  }
`;

function SettingContent() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const toggleTheme = () =>
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  return (
    <>
      <Section>
        <SectionTitle>Number of letters</SectionTitle>
        <Input />
      </Section>
      <Section>
        <SectionTitle>Dark theme</SectionTitle>
        <Toggle theme={theme} onClick={toggleTheme} />
      </Section>
    </>
  );
}

export default SettingContent;
