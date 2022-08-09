import styled from "styled-components";

const ButtonDiv = styled.div`
  background-color: ${(props) =>
    props.hover ? "var(--color-btn-hover)" : "var(--color-btn)"};
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
`;

export default ButtonDiv;
