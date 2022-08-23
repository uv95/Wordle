import styled from "styled-components";

const GrayBackground = styled.div`
  background-color: var(--color-btn);
  border-radius: 1rem;
  padding: 1rem;
  width: 70%;
  margin: 1rem auto;

  @media (max-width: 80em) {
    width: 80%;
  }
  @media (max-width: 71em) {
    width: 90%;
  }
  @media (max-width: 25em) {
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  @media (max-width: 21em) {
    width: 100%;
    padding: 0.1rem;
  }
`;

export default GrayBackground;
