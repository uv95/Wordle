import React from "react";
import CloseIcon from "./modal/CloseIcon";
import Wrapper from "./modal/Wrapper";
import ModalContainer from "./modal/ModalContainer";
import Title from "./modal/Title";
import { useSelector, useDispatch } from "react-redux";
import { toggleInfo } from "../store/modals/modals-actions";

function Stats() {
  const dispatch = useDispatch();

  const { openInfo } = useSelector((state) => state.modals);

  const closeModal = () => dispatch(toggleInfo(false));

  if (openInfo) {
    return (
      <Wrapper onClick={closeModal}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <Title>Info</Title>
          <CloseIcon onClick={closeModal} />
        </ModalContainer>
      </Wrapper>
    );
  }
}

export default Stats;
