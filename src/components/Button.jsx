import styled from "styled-components";

const Button = styled.div`
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

export default Button;
