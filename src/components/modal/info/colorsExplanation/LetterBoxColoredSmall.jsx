import styled from "styled-components";
import LetterBoxColored from "./LetterBoxColored";

const LetterBoxColoredSmall = styled(LetterBoxColored)`
  min-height: 3rem;
  min-width: 3rem;
  height: 3rem;
  width: 3rem;
  font-size: 1.5rem;
  border-radius: 0.4rem;
  margin: 0 0.5rem;

  @media (max-width: 35em) {
    min-height: 2.5rem;
    min-width: 2.5rem;
    height: 2.5rem;
    width: 2.5rem;
    font-size: 1.2rem;
  }
  @media (max-width: 25em) {
    border-radius: 0.2rem;
  }
  @media (max-width: 14em) {
    min-height: 2rem;
    min-width: 2rem;
    height: 2rem;
    width: 2rem;
    font-size: 1rem;
  }
`;

export default LetterBoxColoredSmall;
