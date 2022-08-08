import styled from "styled-components";

const Text = styled.p`
  font-size: 2rem;
  font-weight: ${(props) => (props.bold ? "500" : "300")};
  margin: 0;
  margin-bottom: ${(props) => props.marginBottom && "1rem"};
`;

export default Text;
