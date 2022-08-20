import React from "react";
import styled from "styled-components";
import LetterBoxColored from "../../LetterBoxColored";
import Text from "../Text";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;

  &:not(:nth-of-type(3)) {
    margin-bottom: 1rem;
  }
`;

const LetterBoxColoredSmall = styled(LetterBoxColored)`
  height: 3rem;
  width: 3rem;
  font-size: 1.5rem;
  border-radius: 0.4rem;
  margin: 0 0.5rem;
`;

const GrayBackground = styled.div`
  background-color: var(--color-btn);
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem 0;
`;

function ColorsExplanation() {
  return (
    <GrayBackground>
      <FlexContainer>
        <LetterBoxColoredSmall color="gray">П</LetterBoxColoredSmall>
        <Text>,</Text>
        <LetterBoxColoredSmall color="gray">С</LetterBoxColoredSmall>
        <Text> не содержатся в загаданном слове.</Text>
      </FlexContainer>

      <FlexContainer>
        <LetterBoxColoredSmall color="yellow">А</LetterBoxColoredSmall>
        <Text>,</Text>
        <LetterBoxColoredSmall color="yellow">Т</LetterBoxColoredSmall>
        <Text> содержатся в слове, но не на своем месте.</Text>
      </FlexContainer>

      <FlexContainer>
        <LetterBoxColoredSmall color="green">А</LetterBoxColoredSmall>
        <Text> есть в слове и на своем месте.</Text>
      </FlexContainer>
    </GrayBackground>
  );
}

export default ColorsExplanation;
