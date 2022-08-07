import React from "react";
import styled from "styled-components";
import gb from "../../img/gb.svg";
import ru from "../../img/ru.svg";
import Option from "./Option";
import Wrapper from "../modal/Wrapper";
import Title from "../modal/Title";
import CloseIcon from "../modal/CloseIcon";
import ModalContainer from "../modal/ModalContainer";
import { languages } from "../../config";
import { useDispatch } from "react-redux";
import { toggleLanguage } from "../../store/language/language-actions";

const LanguagesContainer = styled(ModalContainer)`
  min-height: 0;
  margin-top: -30rem;
  padding: 0 2rem 2rem 2rem;
`;

const GridContainer = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1rem;
  justify-items: center;
`;

function Languages() {
  const dispatch = useDispatch();
  const closeModal = () => dispatch(toggleLanguage(false));

  return (
    <Wrapper onClick={closeModal}>
      <LanguagesContainer onClick={(e) => e.stopPropagation()}>
        <Title>Choose language</Title>
        <CloseIcon onClick={closeModal} />
        <GridContainer>
          <Option flag={gb} lang={languages.english} />
          <Option flag={ru} lang={languages.russian} />
        </GridContainer>
      </LanguagesContainer>
    </Wrapper>
  );
}

export default Languages;
