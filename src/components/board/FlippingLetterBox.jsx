import React from "react";
import styled from "styled-components";

const LetterBoxContainer = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  height: 6rem;
  width: ${(props) => {
    return props.wordChecked ? "6.2rem" : "6rem";
  }};
  margin: 0.4rem
    ${(props) => {
      return props.wordChecked ? "0.3rem" : "0.4rem";
    }};
  outline: ${(props) => {
    return props.wordChecked ? "0.15rem" : "0.25rem";
  }}
    solid
    ${(props) => {
      return props.wordChecked ? "transparent" : "var(--color-btn)";
    }};
  outline-offset: ${(props) => {
    return props.wordChecked ? "-0.2rem" : "-0.1rem";
  }};
  border-radius: 1rem;
  perspective: 100rem;
  -moz-perspective: 100rem;
  z-index: 1;
  overflow: hidden;
  transition-duration: ${(props) => {
    return props.newGame ? "none" : `0.7s`;
  }};
  transition-property: ${(props) => {
    return props.newGame ? "none" : `width, margin, outline, outline-offset`;
  }};
  transition-delay: ${(props) =>
    `${props.turn === 0 ? 0 : props.turn - props.turn / 1.2}s`}};
   
    @media (max-width: 26em) {
      border-radius: 0.5rem;
     font-size: 2rem;
     height: 5rem;

    }
    @media (max-width: 21em) {
     font-size: 1.7rem;
    }
    @media (max-width: 15em) {
     font-size: 1.5rem;
     height: 4rem;

    }
    `;

const LetterBoxInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const LetterBoxFront = styled.div`
  background-color: var(--color-bg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${(props) => {
    return props.newGame ? "none" : "transform 0.5s";
  }};
  transition-delay: ${(props) =>
    `${props.turn === 0 ? 0 : props.turn - props.turn / 1.2}s`};
  transform: ${(props) =>
    props.wordChecked ? "rotateY(180deg)" : "rotateY(0deg)"};

  @media (max-width: 26em) {
    border-radius: 0.5rem;
  }
`;

const LetterBoxBack = styled(LetterBoxFront)`
  transition: ${(props) => {
    return props.newGame ? "none" : "transform 0.5s";
  }};
  transition-delay: ${(props) =>
    `${props.turn === 0 ? 0 : props.turn - props.turn / 1.2}s`};
  background-color: ${(props) => {
    if (props.color === "gray") return "var(--color-gray)";
    if (props.color === "green") return "var(--color-green)";
    if (props.color === "yellow") return "var(--color-yellow)";
  }};
  transform: ${(props) =>
    props.wordChecked ? "rotateY(0deg)" : "rotateY(-180deg)"};

  @media (max-width: 26em) {
    border-radius: 0.5rem;
  }
`;

function FlippingLetterBox({ children, wordChecked, color, turn, newGame }) {
  return (
    <LetterBoxContainer
      color={color}
      wordChecked={wordChecked}
      turn={turn}
      newGame={newGame}
    >
      <LetterBoxInner>
        <LetterBoxFront wordChecked={wordChecked} turn={turn} newGame={newGame}>
          {children}
        </LetterBoxFront>
        <LetterBoxBack
          wordChecked={wordChecked}
          color={color}
          turn={turn}
          newGame={newGame}
        >
          {children}
        </LetterBoxBack>
      </LetterBoxInner>
    </LetterBoxContainer>
  );
}

export default FlippingLetterBox;
