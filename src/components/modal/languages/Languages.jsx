import React from 'react';
import styled from 'styled-components';
import gb from '../../../img/gb.svg';
import ru from '../../../img/ru.svg';
import Option from './Option';
import { languages } from '../../../utils';
import { useSelector } from 'react-redux';
import { toggleLanguage } from '../../../store/modals/modals-actions';
import Modal from '../Modal';

const GridContainer = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1rem;
  justify-items: center;
  padding-bottom: 1rem;

  @media (max-width: 18em) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function Languages() {
  const { isLanguageOpen } = useSelector((state) => state.modals);

  if (isLanguageOpen) {
    return (
      <Modal
        toggle={toggleLanguage}
        title={{ english: 'Choose language', russian: 'Выберите язык' }}
      >
        <GridContainer>
          <Option flag={gb} lang={languages.english} />
          <Option flag={ru} lang={languages.russian} />
        </GridContainer>
      </Modal>
    );
  }
}

export default Languages;
