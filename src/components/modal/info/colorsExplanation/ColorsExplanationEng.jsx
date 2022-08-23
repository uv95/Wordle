import React from "react";
import styled from "styled-components";
import Text from "../../Text";
import GrayBackground from "./GrayBackground";
import FlexContainer from "./FlexContainer";
import LetterBoxColoredSmall from "./LetterBoxColoredSmall";

const ExplanationText = styled(Text)`
  @media (max-width: 14em) {
    font-size: 1.2rem;
  }
`;

function ColorsExplanationEng() {
  return (
    <GrayBackground>
      <FlexContainer>
        <LetterBoxColoredSmall color="gray">T</LetterBoxColoredSmall>
        <ExplanationText>,</ExplanationText>
        <LetterBoxColoredSmall color="gray">B</LetterBoxColoredSmall>
        <ExplanationText> aren't in the target word at all.</ExplanationText>
      </FlexContainer>

      <FlexContainer>
        <LetterBoxColoredSmall color="yellow">A</LetterBoxColoredSmall>
        <ExplanationText>,</ExplanationText>
        <LetterBoxColoredSmall color="yellow">L</LetterBoxColoredSmall>
        <ExplanationText>is in the word but in the wrong spot.</ExplanationText>
      </FlexContainer>

      <FlexContainer>
        <LetterBoxColoredSmall color="green">E</LetterBoxColoredSmall>
        <ExplanationText>
          is in the word and in the correct spot.
        </ExplanationText>
      </FlexContainer>
    </GrayBackground>
  );
}

export default ColorsExplanationEng;
