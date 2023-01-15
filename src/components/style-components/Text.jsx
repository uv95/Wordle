import styled from 'styled-components';

const Text = styled.p`
  font-size: 2rem;
  font-weight: ${(props) => (props.isBold ? '500' : '300')};
  margin: 0;
  margin-bottom: ${(props) => props.hasMarginBottom && '1rem'};

  @media (max-width: 39em) {
    font-size: 1.8rem;
  }

  @media (max-width: 26em) {
    font-size: 1.5rem;
  }
`;

export default Text;
