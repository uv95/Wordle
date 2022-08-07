import React, { useState } from "react";
import styled from "styled-components";

export const ButtonDiv = styled.div`
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

function Button({ children, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <ButtonDiv
      hover={hover}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {children}
    </ButtonDiv>
  );
}

export default Button;
