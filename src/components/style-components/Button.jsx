import styled from 'styled-components';

export const Button = styled.div`
  background-color: var(--color-btn);
  border-radius: 1rem;
  height: 4rem;
  min-width: 4rem;
  font-size: 2rem;
  padding: 0.8rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-btn-hover);
  }

  @media (max-width: 26em) {
    border-radius: 0.5rem;
    font-size: 1.5rem;
    height: 2.5em;
    min-width: 3rem;
  }
`;

export const KeyBtn = styled(Button)`
  min-width: ${(props) => (props.isEnter ? '7.5rem' : '4rem')};
  height: 5rem;
  font-size: 2rem;
  background-color: ${(props) => {
    if (props.color === 'gray') return 'var(--color-gray)';
    if (props.color === 'green') return 'var(--color-green)';
    if (props.color === 'yellow') return 'var(--color-yellow)';
    return 'var(--color-btn)';
  }};
  transition: background-color 0.2s;
  padding: ${(props) => (props.isEnter ? '0 0.5rem' : '0 1.2rem')};

  &:hover {
    background-color: ${(props) => {
      if (props.color === 'gray') return 'var(--color-gray)';
      if (props.color === 'green') return 'var(--color-green)';
      if (props.color === 'yellow') return 'var(--color-yellow)';
      return 'var(--color-btn-hover)';
    }};
  }

  @media (max-width: 35em) {
    min-width: ${(props) => (props.isEnter ? '7.5rem' : '3.5rem')};
  }
  @media (max-width: 30em) {
    min-width: ${(props) => (props.isEnter ? '6rem' : '8%')};
    border-radius: 0.5rem;
    font-size: 1.9rem;
  }
  @media (max-width: 26em) {
    font-size: 1.6rem;
    min-width: ${(props) => (props.isEnter ? '5rem' : '6%')};
    width: ${(props) => (props.isEnter ? '12rem' : '13%')};
  }
  @media (max-width: 17em) {
    padding: ${(props) => (props.isEnter ? '0' : '0 0.5rem')};
    font-size: 1.2rem;
  }
`;
