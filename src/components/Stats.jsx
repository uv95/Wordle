import React from "react";
import CloseIcon from "./modal/CloseIcon";
import Wrapper from "./modal/Wrapper";
import ModalContainer from "./modal/ModalContainer";
import { useSelector, useDispatch } from "react-redux";
import { toggleStats } from "../store/modals/modals-actions";

function Stats() {
  const dispatch = useDispatch();

  const { openStats } = useSelector((state) => state.modals);

  const closeModal = () => dispatch(toggleStats(false));

  if (openStats) {
    return (
      <Wrapper onClick={closeModal}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <h2>Stats</h2>
          <CloseIcon onClick={closeModal} />
        </ModalContainer>
      </Wrapper>
    );
  }
}

export default Stats;
