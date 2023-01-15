import styled from "styled-components";

const Title = styled.h2`
  font-size: 3rem;
  margin: 1.5rem 0;

  @media (max-width: 26em) {
    font-size: 2.5rem;
  }
  @media (max-width: 18em) {
    font-size: 2rem;
  }
`;

export default Title;
