import styled from "styled-components";

const LetterBox = styled.div`
  height: 6rem;
  background-color: ${(props) => {
    if (props.color === "gray") return "var(--color-gray)";
    if (props.color === "green") return "var(--color-green)";
    if (props.color === "yellow") return "var(--color-yellow)";
    return "var(--color-bg)";
  }};
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0.3rem;
  border-radius: 1rem;
  border: 0.2rem solid
    ${(props) => {
      if (props.color === "gray") return "var(--color-gray)";
      if (props.color === "green") return "var(--color-green)";
      if (props.color === "yellow") return "var(--color-yellow)";
      return "var(--color-btn)";
    }};
`;

export default LetterBox;
