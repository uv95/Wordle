import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { LetterBoxColoredSmall } from '../../style-components/LetterBox';
import Text from '../../style-components/Text';

const ExplanationText = styled(Text)`
  @media (max-width: 14em) {
    font-size: 1.2rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  &:not(:nth-of-type(3)) {
    margin-bottom: 1rem;
  }
`;

const Background = styled.div`
  background-color: var(--color-btn);
  border-radius: 1rem;
  padding: 1rem;
  width: 70%;
  margin: 1rem auto;

  @media (max-width: 80em) {
    width: 80%;
  }
  @media (max-width: 71em) {
    width: 90%;
  }
  @media (max-width: 25em) {
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  @media (max-width: 21em) {
    width: 100%;
    padding: 0.1rem;
  }
`;

function ColorsExplanation() {
  const { language } = useSelector((state) => state.language);

  const text = useMemo(() => {
    if (language === 'English')
      return [
        'T',
        'B',
        "aren't in the target word at all.",
        'A',
        'L',
        'are in the word but in the wrong spot.',
        'E',
        'is in the word and in the correct spot.',
      ];
    if (language === 'Russian')
      return [
        'П',
        'С',
        'не содержатся в загаданном слове.',
        'А',
        'Т',
        'содержатся в слове, но не на своем месте.',
        'А',
        'есть в слове и на своем месте.',
      ];
  }, [language]);

  return (
    <Background>
      <FlexContainer>
        <LetterBoxColoredSmall color="gray">{text[0]}</LetterBoxColoredSmall>
        <ExplanationText>,</ExplanationText>
        <LetterBoxColoredSmall color="gray">{text[1]}</LetterBoxColoredSmall>
        <ExplanationText>{text[2]}</ExplanationText>
      </FlexContainer>

      <FlexContainer>
        <LetterBoxColoredSmall color="yellow">{text[3]}</LetterBoxColoredSmall>
        <ExplanationText>,</ExplanationText>
        <LetterBoxColoredSmall color="yellow">{text[4]}</LetterBoxColoredSmall>
        <ExplanationText>{text[5]}</ExplanationText>
      </FlexContainer>

      <FlexContainer>
        <LetterBoxColoredSmall color="green">{text[6]}</LetterBoxColoredSmall>
        <ExplanationText>{text[7]}</ExplanationText>
      </FlexContainer>
    </Background>
  );
}

export default React.memo(ColorsExplanation);
