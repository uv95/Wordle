import React from "react";
import styled from "styled-components";
import Button from "../../Button";
import { useDispatch, useSelector } from "react-redux";
import { setWordLength } from "../../../store/word/word-actions";

const FlexContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Number = styled(Button)`
  background-color: ${(props) =>
    props.currentNum ? "var(--color-green)" : "var(--color-btn)"};

  &:hover {
    background-color: ${(props) =>
      props.currentNum ? "var(--color-green)" : "var(--color-btn-hover)"};
  }
`;

function Numbers() {
  const dispatch = useDispatch();
  const { lettersNumber } = useSelector((state) => state.word);
  const numbers = [5, 6, 7, 8, 9, 10];

  return (
    <FlexContainer>
      {numbers.map((num) => (
        <Number
          key={num}
          currentNum={num === lettersNumber}
          onClick={() => dispatch(setWordLength(num))}
        >
          {num}
        </Number>
      ))}
    </FlexContainer>
  );
}

export default Numbers;
