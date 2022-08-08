import React from "react";
import styled from "styled-components";
import LetterBoxColored from "../../LetterBoxColored";
import Text from "./Text";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.marginBottom && "1rem"};
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
      <FlexContainer marginBottom>
        <LetterBoxColoredSmall color="gray">T</LetterBoxColoredSmall>
        <Text>,</Text>
        <LetterBoxColoredSmall color="gray">B</LetterBoxColoredSmall>
        <Text> aren't in the target word at all.</Text>
      </FlexContainer>

      <FlexContainer marginBottom>
        <LetterBoxColoredSmall color="yellow">A</LetterBoxColoredSmall>
        <Text>,</Text>
        <LetterBoxColoredSmall color="yellow">L</LetterBoxColoredSmall>
        <Text> is in the word but in the wrong spot.</Text>
      </FlexContainer>

      <FlexContainer>
        <LetterBoxColoredSmall color="green">E</LetterBoxColoredSmall>
        <Text> is in the word and in the correct spot.</Text>
      </FlexContainer>
    </GrayBackground>
  );
}

export default ColorsExplanation;
