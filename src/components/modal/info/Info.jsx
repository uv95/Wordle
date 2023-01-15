import React from 'react';
import { useSelector } from 'react-redux';
import { toggleInfo } from '../../../store/modals/modals-actions';
import Modal from '../Modal';
import InfoContent from './InfoContent';

function Stats() {
  const { isInfoOpen } = useSelector((state) => state.modals);

  if (isInfoOpen) {
    return (
      <Modal
        toggle={toggleInfo}
        title={{ english: 'How to play', russian: 'Правила игры' }}
      >
        <InfoContent />
      </Modal>
    );
  }
}

export default Stats;
