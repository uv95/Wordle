import React from "react";
import SettingContent from "./SettingContent";
import { useSelector } from "react-redux";
import { toggleSetting } from "../../../store/modals/modals-actions";
import Modal from "../Modal";

function Setting() {
  const { openSetting } = useSelector((state) => state.modals);

  if (openSetting) {
    return (
      <Modal
        toggle={toggleSetting}
        titleEng={"Settings"}
        titleRus={"Настройки"}
      >
        <SettingContent />
      </Modal>
    );
  }
}

export default Setting;
