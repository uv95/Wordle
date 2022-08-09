import React from "react";
import CloseIcon from "../CloseIcon";
import Wrapper from "../Wrapper";
import ModalContainer from "../ModalContainer";
import Title from "../Title";
import SettingContent from "./SettingContent";
import { useSelector, useDispatch } from "react-redux";
import { toggleSetting } from "../../../store/modals/modals-actions";

function Setting() {
  const dispatch = useDispatch();

  const { openSetting } = useSelector((state) => state.modals);

  const closeModal = () => dispatch(toggleSetting(false));

  if (openSetting) {
    return (
      <Wrapper onClick={closeModal}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <Title>Settings</Title>
          <CloseIcon onClick={closeModal} />
          <SettingContent />
        </ModalContainer>
      </Wrapper>
    );
  }
}

export default Setting;
