import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "./CloseIcon";
import Title from "./Title";
import ModalContainer from "./ModalContainer";

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
    props.theme === "light"
      ? "rgba(255, 255, 255, 0.4)"
      : "rgba(0, 0, 0, 0.4)"};
`;

function Modal({ children, titleEng, titleRus, toggle }) {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [closed, setClosed] = useState(false);

  const { language } = useSelector((state) => state.language);

  const closeModal = (toggle) => {
    setClosed(true);
    setTimeout(() => {
      dispatch(toggle(false));
      setClosed(false);
    }, 200);
  };

  useEffect(() => {
    const setPageTitle = (titleEng, titleRus) => {
      language === "English" && setTitle(titleEng);
      language === "Russian" && setTitle(titleRus);
    };
    setPageTitle(titleEng, titleRus);
  }, [language, titleEng, titleRus]);

  return (
    <Wrapper onClick={() => closeModal(toggle)} theme={theme}>
      <ModalContainer onClick={(e) => e.stopPropagation()} closed={closed}>
        <Title>{title}</Title>
        <CloseIcon onClick={() => closeModal(toggle)} />
        {children}
      </ModalContainer>
    </Wrapper>
  );
}

export default Modal;
