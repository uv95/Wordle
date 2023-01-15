import React from 'react';
import SettingContent from './SettingContent';
import { useSelector } from 'react-redux';
import { toggleSetting } from '../../../store/modals/modals-actions';
import Modal from '../Modal';

function Setting() {
  const { isSettingOpen } = useSelector((state) => state.modals);

  if (isSettingOpen) {
    return (
      <Modal
        toggle={toggleSetting}
        title={{ english: 'Settings', russian: 'Настройки' }}
      >
        <SettingContent />
      </Modal>
    );
  }
}

export default Setting;
