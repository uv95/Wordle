import React, { useState, useEffect } from "react";
import CloseIcon from "../CloseIcon";
import Wrapper from "../Wrapper";
import ModalContainer from "../ModalContainer";
import Title from "../Title";
import InfoContentRus from "./InfoContentRus";
import InfoContentEng from "./InfoContentEng";
import { useSelector, useDispatch } from "react-redux";
import { toggleInfo } from "../../../store/modals/modals-actions";

function Stats() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const { openInfo } = useSelector((state) => state.modals);
  const { language } = useSelector((state) => state.language);

  const closeModal = () => dispatch(toggleInfo(false));

  useEffect(() => {
    language === "English" && setTitle("How to play");
    language === "Russian" && setTitle("Правила игры");
  }, [language]);

  if (openInfo) {
    return (
      <Wrapper onClick={closeModal}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <Title>{title}</Title>
          <CloseIcon onClick={closeModal} />
          {language === "English" && <InfoContentEng />}
          {language === "Russian" && <InfoContentRus />}
        </ModalContainer>
      </Wrapper>
    );
  }
}

export default Stats;
