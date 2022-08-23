import styled, { css } from "styled-components";
import { open, close } from "./animation";

const toggleModal = (props) => css`
  ${props.closed ? close : open} 0.2s ease
`;

const ModalContainer = styled.div`
  width: 60%;
  max-height: 100%;
  overflow-y: auto;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem 0.5rem rgba(31, 31, 31, 0.2);
  background-color: var(--color-bg);
  text-align: center;
  position: relative;
  padding: 0 2rem 2rem 2rem;
  animation: ${toggleModal};

  @media (max-width: 56em) {
    width: 85%;
  }
  @media (max-width: 18em) {
    padding: 0 1rem 1rem 1rem;
  }
`;
export default ModalContainer;
