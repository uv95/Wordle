import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { useSelector } from "react-redux";
import { languages } from "../config";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
`;

const Key = styled.div`
  height: 5rem;
  min-width: 4rem;
  margin: 0.5rem;
  padding: 0 1rem;
  border-radius: 20%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-btn);
  cursor: pointer;
`;

function Keyboard() {
  const { language } = useSelector((state) => state.language);

  return (
    <Wrapper>
      <Row>
        {languages[language.toLowerCase()].keyboard.first.map((key) => (
          <Key key={key}>{key.toUpperCase()}</Key>
        ))}
      </Row>
      <Row>
        {languages[language.toLowerCase()].keyboard.second.map((key) => (
          <Key key={key}>{key.toUpperCase()}</Key>
        ))}
      </Row>
      <Row>
        {languages[language.toLowerCase()].keyboard.third.map((key) => (
          <Key key={key}>{key.toUpperCase()}</Key>
        ))}
        <Key>
          <FiArrowLeft />
        </Key>
      </Row>
    </Wrapper>
  );
}

export default Keyboard;
