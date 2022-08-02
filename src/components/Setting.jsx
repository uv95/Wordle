import React from "react";
import CloseIcon from "./modal/CloseIcon";
import Wrapper from "./modal/Wrapper";
import ModalContainer from "./modal/ModalContainer";
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
          <h2>Setting</h2>
          <CloseIcon onClick={closeModal} />
        </ModalContainer>
      </Wrapper>
    );
  }
}

export default Setting;
