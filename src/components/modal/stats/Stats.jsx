import React from 'react';
import { useSelector } from 'react-redux';
import { toggleStats } from '../../../store/modals/modals-actions';
import Modal from '../Modal';
import StatsContent from './StatsContent';

function Stats() {
  const { isStatsOpen } = useSelector((state) => state.modals);

  if (isStatsOpen)
    return (
      <Modal
        toggle={toggleStats}
        title={{ english: 'Statistics', russian: 'Статистика' }}
      >
        <StatsContent />
      </Modal>
    );
}

export default Stats;
