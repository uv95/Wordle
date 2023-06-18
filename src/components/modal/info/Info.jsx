import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { toggleInfo } from '../../../store/modals/modals-actions';
import Modal from '../Modal';
import InfoContent from './InfoContent';

function Stats() {
  const { isInfoOpen } = useSelector((state) => state.modals);
  const { t } = useTranslation();

  if (isInfoOpen) {
    return (
      <Modal toggle={toggleInfo} title={t('rules')}>
        <InfoContent />
      </Modal>
    );
  }
}

export default Stats;
