import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { toggleStats } from '../../../store/modals/modals-actions';
import Modal from '../Modal';
import StatsContent from './StatsContent';

function Stats() {
  const { isStatsOpen } = useSelector((state) => state.modals);
  const { t } = useTranslation();

  if (isStatsOpen)
    return (
      <Modal toggle={toggleStats} title={t('stats')}>
        <StatsContent />
      </Modal>
    );
}

export default Stats;
