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

function ColorsExplanation() {
  return (
    <GrayBackground>
      <FlexContainer>
        <LetterBoxColoredSmall color="gray">П</LetterBoxColoredSmall>
        <ExplanationText>,</ExplanationText>
        <LetterBoxColoredSmall color="gray">С</LetterBoxColoredSmall>
        <ExplanationText style={{ marginLeft: "0.5rem" }}>
          не содержатся в загаданном слове.
        </ExplanationText>
      </FlexContainer>

      <FlexContainer>
        <LetterBoxColoredSmall color="yellow">А</LetterBoxColoredSmall>
        <ExplanationText>,</ExplanationText>
        <LetterBoxColoredSmall color="yellow">Т</LetterBoxColoredSmall>
        <ExplanationText style={{ marginLeft: "0.5rem" }}>
          содержатся в слове, но не на своем месте.
        </ExplanationText>
      </FlexContainer>

      <FlexContainer>
        <LetterBoxColoredSmall color="green">А</LetterBoxColoredSmall>
        <ExplanationText style={{ marginLeft: "0.5rem" }}>
          есть в слове и на своем месте.
        </ExplanationText>
      </FlexContainer>
    </GrayBackground>
  );
}

export default ColorsExplanation;
