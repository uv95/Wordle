import React from "react";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { useSelector } from "react-redux";
import { languages } from "../config";
import Button from "./Button";

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
  min-width: 5rem;
  font-size: 2rem;
`;

function Keyboard() {
  const { language } = useSelector((state) => state.language);

  return (
    <Wrapper>
      <Row>
        {languages[language.toLowerCase()].keyboard.first.map((key) => (
          <KeyBtn key={key}>{key.toUpperCase()}</KeyBtn>
        ))}
      </Row>
      <Row>
        {languages[language.toLowerCase()].keyboard.second.map((key) => (
          <KeyBtn key={key}>{key.toUpperCase()}</KeyBtn>
        ))}
      </Row>
      <Row>
        {languages[language.toLowerCase()].keyboard.third.map((key) => (
          <KeyBtn key={key}>{key.toUpperCase()}</KeyBtn>
        ))}
        <KeyBtn>
          <FiArrowLeft />
        </KeyBtn>
      </Row>
    </Wrapper>
  );
}

export default Keyboard;
