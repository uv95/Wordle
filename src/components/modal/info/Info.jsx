import React from "react";
import InfoContentRus from "./InfoContentRus";
import InfoContentEng from "./InfoContentEng";
import { useSelector } from "react-redux";
import { toggleInfo } from "../../../store/modals/modals-actions";
import Modal from "../Modal";

function Stats() {
  const { openInfo } = useSelector((state) => state.modals);
  const { language } = useSelector((state) => state.language);

  if (openInfo) {
    return (
      <Modal
        toggle={toggleInfo}
        titleEng={"How to play"}
        titleRus={"Правила игры"}
      >
        {language === "English" && <InfoContentEng />}
        {language === "Russian" && <InfoContentRus />}
      </Modal>
    );
  }
}

export default Stats;
