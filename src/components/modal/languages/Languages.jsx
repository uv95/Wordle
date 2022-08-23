import React from "react";
import styled from "styled-components";
import gb from "../../../img/gb.svg";
import ru from "../../../img/ru.svg";
import Option from "./Option";
import { languages } from "../../../config";
import { useSelector } from "react-redux";
import { toggleLanguage } from "../../../store/modals/modals-actions";
import Modal from "../Modal";

const GridContainer = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1rem;
  justify-items: center;
  padding-bottom: 1rem;
`;

function Languages() {
  const { openLanguages } = useSelector((state) => state.modals);

  if (openLanguages) {
    return (
      <Modal
        toggle={toggleLanguage}
        titleEng={"Choose language"}
        titleRus={"Выберите язык"}
      >
        <GridContainer>
          <Option flag={gb} lang={languages.english} />
          <Option flag={ru} lang={languages.russian} />
        </GridContainer>
      </Modal>
    );
  }
}

export default Languages;
