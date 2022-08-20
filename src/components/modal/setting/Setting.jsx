import React, { useState, useEffect } from "react";
import CloseIcon from "../CloseIcon";
import Wrapper from "../Wrapper";
import ModalContainer from "../ModalContainer";
import Title from "../Title";
import SettingContent from "./SettingContent";
import { useSelector, useDispatch } from "react-redux";
import { toggleSetting } from "../../../store/modals/modals-actions";

function Setting() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const { openSetting } = useSelector((state) => state.modals);
  const { language } = useSelector((state) => state.language);

  const closeModal = () => dispatch(toggleSetting(false));

  useEffect(() => {
    language === "English" && setTitle("Settings");
    language === "Russian" && setTitle("Настройки");
  }, [language]);

  if (openSetting) {
    return (
      <Wrapper onClick={closeModal}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <Title>{title}</Title>
          <CloseIcon onClick={closeModal} />
          <SettingContent />
        </ModalContainer>
      </Wrapper>
    );
  }
}

export default Setting;
