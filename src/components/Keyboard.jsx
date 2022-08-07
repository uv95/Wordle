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
`;

const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

function Keyboard() {
  const { language } = useSelector((state) => state.language);

  return (
    <Wrapper>
      <Row>
        {languages[language.toLowerCase()].keyboard.first.map((key) => (
          <Button key={key}>{key.toUpperCase()}</Button>
        ))}
      </Row>
      <Row>
        {languages[language.toLowerCase()].keyboard.second.map((key) => (
          <Button key={key}>{key.toUpperCase()}</Button>
        ))}
      </Row>
      <Row>
        {languages[language.toLowerCase()].keyboard.third.map((key) => (
          <Button key={key}>{key.toUpperCase()}</Button>
        ))}
        <Button>
          <FiArrowLeft />
        </Button>
      </Row>
    </Wrapper>
  );
}

export default Keyboard;
