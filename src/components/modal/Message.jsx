import React from "react";
import styled from "styled-components";
import ModalContainer from "./ModalContainer";

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
  width: 23rem;
  height: 6rem;
  padding: 1rem;
`;

const Text = styled.h2`
  font-size: 3rem;
  font-weight: 500;
`;

function Message() {
  return (
    <Wrapper>
      <Container>
        <Text>No such word</Text>
      </Container>
    </Wrapper>
  );
}

export default Message;
