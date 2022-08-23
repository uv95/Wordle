import styled from "styled-components";
import LetterBox from "../../../board/LetterBox";

const LetterBoxColored = styled(LetterBox)`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-white);
  background-color: ${(props) => {
    if (props.color === "gray") return "var(--color-gray)";
    if (props.color === "green") return "var(--color-green)";
    if (props.color === "yellow") return "var(--color-yellow)";
  }};

  @media (max-width: 23em) {
    height: 5rem;
    width: 5rem;
    font-size: 2.5rem;
    border-radius: 0.5rem;
  }
`;

export default LetterBoxColored;
