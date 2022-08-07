import React from "react";
import CloseIcon from "./modal/CloseIcon";
import Wrapper from "./modal/Wrapper";
import ModalContainer from "./modal/ModalContainer";
import Title from "./modal/Title";
import { useSelector, useDispatch } from "react-redux";
import { toggleSetting } from "../store/modals/modals-actions";

function Setting() {
  const dispatch = useDispatch();

  const { openSetting } = useSelector((state) => state.modals);

  const closeModal = () => dispatch(toggleSetting(false));

  if (openSetting) {
    return (
      <Wrapper onClick={closeModal}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <Title>Setting</Title>
          <CloseIcon onClick={closeModal} />
        </ModalContainer>
      </Wrapper>
    );
  }
}

export default Setting;
