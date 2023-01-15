import styled from "styled-components";

const Toggle = styled.div`
  width: 6rem;
  height: 3rem;
  background-color: ${(props) =>
    props.theme === "light" ? "var(--color-btn)" : "var(--color-green)"};
  border-radius: 2rem;
  margin-right: 0.5rem;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;

  &:after {
    content: "";
    background-color: var(--color-white);
    height: 2.6rem;
    width: 2.6rem;
    position: absolute;
    top: 0.2rem;
    left: ${(props) => (props.theme === "light" ? "0.2rem" : "3.2rem")};
    border-radius: 2rem;
    transition: all 0.2s;
  }
`;

export default Toggle;
