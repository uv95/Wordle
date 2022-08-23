import React from "react";
import StatsContentEng from "./StatsContentEng";
import StatsContentRus from "./StatsContentRus";
import { useSelector } from "react-redux";
import { toggleStats } from "../../../store/modals/modals-actions";
import Modal from "../Modal";

function Stats() {
  const { openStats } = useSelector((state) => state.modals);
  const { language } = useSelector((state) => state.language);

  if (openStats)
    return (
      <Modal
        toggle={toggleStats}
        titleEng={"Statistics"}
        titleRus={"Статистика"}
      >
        {language === "English" && <StatsContentEng />}
        {language === "Russian" && <StatsContentRus />}
      </Modal>
    );
}

export default Stats;
