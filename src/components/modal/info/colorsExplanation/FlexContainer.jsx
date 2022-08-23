import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  &:not(:nth-of-type(3)) {
    margin-bottom: 1rem;
  }
`;

export default FlexContainer;
