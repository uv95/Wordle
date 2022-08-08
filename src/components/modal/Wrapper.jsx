import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const WrapperDiv = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme === "light"
      ? "rgba(255, 255, 255, 0.4)"
      : "rgba(0, 0, 0, 0.4)"};
`;

function Wrapper({ children, onClick }) {
  const theme = useSelector((state) => state.theme);

  return (
    <WrapperDiv onClick={onClick} theme={theme}>
      {children}
    </WrapperDiv>
  );
}

export default Wrapper;
