import React, { useState, useEffect } from "react";
import CloseIcon from "../CloseIcon";
import Wrapper from "../Wrapper";
import ModalContainer from "../ModalContainer";
import Title from "../Title";
import StatsContentEng from "./StatsContentEng";
import StatsContentRus from "./StatsContentRus";
import { useSelector, useDispatch } from "react-redux";
import { toggleStats } from "../../../store/modals/modals-actions";

function Stats() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const { openStats } = useSelector((state) => state.modals);
  const { language } = useSelector((state) => state.language);

  const closeModal = () => dispatch(toggleStats(false));

  useEffect(() => {
    language === "English" && setTitle("Statistics");
    language === "Russian" && setTitle("Статистика");
  }, [language]);

  if (openStats) {
    return (
      <Wrapper onClick={closeModal}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <Title>{title}</Title>
          <CloseIcon onClick={closeModal} />
          {language === "English" && <StatsContentEng />}
          {language === "Russian" && <StatsContentRus />}
        </ModalContainer>
      </Wrapper>
    );
  }
}

export default Stats;
