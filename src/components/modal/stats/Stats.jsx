import React from "react";
import CloseIcon from "../CloseIcon";
import Wrapper from "../Wrapper";
import ModalContainer from "../ModalContainer";
import Title from "../Title";
import StatsContent from "./StatsContent";
import { useSelector, useDispatch } from "react-redux";
import { toggleStats } from "../../../store/modals/modals-actions";

function Stats() {
  const dispatch = useDispatch();

  const { openStats } = useSelector((state) => state.modals);

  const closeModal = () => dispatch(toggleStats(false));

  if (openStats) {
    return (
      <Wrapper onClick={closeModal}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <Title>Statistics</Title>
          <CloseIcon onClick={closeModal} />
          <StatsContent />
        </ModalContainer>
      </Wrapper>
    );
  }
}

export default Stats;
