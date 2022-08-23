import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalContainer from "./ModalContainer";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

const Container = styled(ModalContainer)`
  width: 25rem;
  height: 5rem;
  padding: 1rem;
  z-index: 2;
`;

const Text = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
`;

function Message() {
  const [text, setText] = useState("");
  const { language } = useSelector((state) => state.language);

  useEffect(() => {
    language === "English" && setText("No such word");
    language === "Russian" && setText("Нет такого слова");
  }, [language]);
  return (
    <Wrapper>
      <Container>
        <Text>{text}</Text>
      </Container>
    </Wrapper>
  );
}

export default Message;
