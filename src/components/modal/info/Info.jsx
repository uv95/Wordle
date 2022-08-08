import React from "react";
import CloseIcon from "../CloseIcon";
import Wrapper from "../Wrapper";
import ModalContainer from "../ModalContainer";
import Title from "../Title";
import InfoContent from "./InfoContent";
import { useSelector, useDispatch } from "react-redux";
import { toggleInfo } from "../../../store/modals/modals-actions";

function Stats() {
  const dispatch = useDispatch();

  const { openInfo } = useSelector((state) => state.modals);

  const closeModal = () => dispatch(toggleInfo(false));

  if (openInfo) {
    return (
      <Wrapper onClick={closeModal}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <Title>How to play</Title>
          <CloseIcon onClick={closeModal} />
          <InfoContent />
        </ModalContainer>
      </Wrapper>
    );
  }
}

export default Stats;
