import styled from 'styled-components';

export const LetterBox = styled.div`
  height: 6rem;
  background-color: ${(props) => {
    if (props.color === 'gray') return 'var(--color-gray)';
    if (props.color === 'green') return 'var(--color-green)';
    if (props.color === 'yellow') return 'var(--color-yellow)';
    return 'var(--color-bg)';
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
      if (props.color === 'gray') return 'var(--color-gray)';
      if (props.color === 'green') return 'var(--color-green)';
      if (props.color === 'yellow') return 'var(--color-yellow)';
      return 'var(--color-btn)';
    }};
`;

export const LetterBoxColored = styled(LetterBox)`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-white);
  background-color: ${(props) => {
    if (props.color === 'gray') return 'var(--color-gray)';
    if (props.color === 'green') return 'var(--color-green)';
    if (props.color === 'yellow') return 'var(--color-yellow)';
  }};

  @media (max-width: 23em) {
    height: 5rem;
    width: 5rem;
    font-size: 2.5rem;
    border-radius: 0.5rem;
  }
`;

export const LetterBoxColoredSmall = styled(LetterBoxColored)`
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
