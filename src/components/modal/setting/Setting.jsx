import React from 'react';
import SettingContent from './SettingContent';
import { useSelector } from 'react-redux';
import { toggleSetting } from '../../../store/modals/modals-actions';
import Modal from '../Modal';
import { useTranslation } from 'react-i18next';

function Setting() {
  const { isSettingOpen } = useSelector((state) => state.modals);
  const { t } = useTranslation();

  if (isSettingOpen) {
    return (
      <Modal toggle={toggleSetting} title={t('settings')}>
        <SettingContent />
      </Modal>
    );
  }
}

export default Setting;
