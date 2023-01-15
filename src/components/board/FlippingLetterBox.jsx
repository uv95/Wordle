import React from 'react';
import styled from 'styled-components';

const LetterBoxContainer = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  height: 6rem;
  width: ${(props) => {
    return props.isWordChecked ? '6.2rem' : '6rem';
  }};
  margin: 0.4rem
    ${(props) => {
      return props.isWordChecked ? '0.3rem' : '0.4rem';
    }};
  border: 0.2rem solid  ${(props) => {
    return props.isWordChecked ? 'transparent' : 'var(--color-btn)';
  }};
  border-radius: 1rem;
  transform: translateZ(0);
  perspective: 100rem;
  -moz-perspective: 100rem;
  z-index: 1;
  overflow: hidden;
  transition-duration: ${(props) => {
    return props.isNewGame ? 'none' : `0.6s`;
  }};
  transition-property: ${(props) => {
    return props.isNewGame ? 'none' : `width, margin, border`;
  }};
  transition-delay: ${(props) =>
    `${
      props.letterIndex === 0 ? 0 : props.letterIndex - props.letterIndex / 1.2
    }s`}};
   
    @media (max-width: 26em) {
      border-radius: 0.5rem;
     font-size: 2rem;
     width: ${(props) => {
       return props.isWordChecked ? '5.2rem' : '5rem';
     }};
     height: 5rem;

    }
    @media (max-width: 21em) {
     font-size: 1.7rem;
    }
    @media (max-width: 15em) {
     font-size: 1.5rem;
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
    return props.isNewGame ? 'none' : 'transform 0.5s';
  }};
  transition-delay: ${(props) =>
    `${
      props.letterIndex === 0 ? 0 : props.letterIndex - props.letterIndex / 1.2
    }s`};
  transform: ${(props) =>
    props.isWordChecked ? 'rotateY(180deg)' : 'rotateY(0deg)'};

  @media (max-width: 26em) {
    border-radius: 0.5rem;
  }
`;

const LetterBoxBack = styled(LetterBoxFront)`
  transition: ${(props) => {
    return props.isNewGame ? 'none' : 'transform 0.5s';
  }};
  transition-delay: ${(props) =>
    `${
      props.letterIndex === 0 ? 0 : props.letterIndex - props.letterIndex / 1.2
    }s`};
  background-color: ${(props) => {
    if (props.color === 'gray') return 'var(--color-gray)';
    if (props.color === 'green') return 'var(--color-green)';
    if (props.color === 'yellow') return 'var(--color-yellow)';
  }};
  transform: ${(props) =>
    props.isWordChecked ? 'rotateY(0deg)' : 'rotateY(-180deg)'};

  @media (max-width: 26em) {
    border-radius: 0.5rem;
  }
`;

function FlippingLetterBox({
  children,
  isWordChecked,
  color,
  letterIndex,
  isNewGame,
}) {
  return (
    <LetterBoxContainer
      color={color}
      isWordChecked={isWordChecked}
      letterIndex={letterIndex}
      isNewGame={isNewGame}
    >
      <LetterBoxInner>
        <LetterBoxFront
          isWordChecked={isWordChecked}
          letterIndex={letterIndex}
          isNewGame={isNewGame}
        >
          {children}
        </LetterBoxFront>
        <LetterBoxBack
          isWordChecked={isWordChecked}
          color={color}
          letterIndex={letterIndex}
          isNewGame={isNewGame}
        >
          {children}
        </LetterBoxBack>
      </LetterBoxInner>
    </LetterBoxContainer>
  );
}

export default FlippingLetterBox;
