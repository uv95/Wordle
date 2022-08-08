import React from "react";
import styled from "styled-components";
import LetterBox from "./board/LetterBox";

const LetterBoxColored = styled(LetterBox)`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-bg);
  background-color: ${(props) => {
    if (props.color === "gray") return "var(--color-gray)";
    if (props.color === "green") return "var(--color-green)";
    if (props.color === "yellow") return "var(--color-yellow)";
  }};
`;

export default LetterBoxColored;
