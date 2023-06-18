import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '../style-components/CloseIcon';
import Title from '../style-components/Title';
import ModalContainer from '../style-components/ModalContainer';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme === 'light'
      ? 'rgba(255, 255, 255, 0.4)'
      : 'rgba(0, 0, 0, 0.4)'};
`;

function Modal({ children, title, toggle }) {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [isClosed, setIsClosed] = useState(false);

  const closeModal = (toggle) => {
    setIsClosed(true);
    setTimeout(() => {
      dispatch(toggle(false));
      setIsClosed(false);
    }, 200);
  };

  return (
    <Wrapper onClick={() => closeModal(toggle)} theme={theme}>
      <ModalContainer onClick={(e) => e.stopPropagation()} isClosed={isClosed}>
        <Title>{title}</Title>
        <CloseIcon onClick={() => closeModal(toggle)} />
        {children}
      </ModalContainer>
    </Wrapper>
  );
}

export default Modal;
