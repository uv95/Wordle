import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <Background>
      <FlexContainer>
        <LetterBoxColoredSmall color="gray">
          {t('colors-explanation.0')}
        </LetterBoxColoredSmall>
        <ExplanationText>,</ExplanationText>
        <LetterBoxColoredSmall color="gray">
          {t('colors-explanation.1')}
        </LetterBoxColoredSmall>
        <ExplanationText>{t('colors-explanation.2')}</ExplanationText>
      </FlexContainer>

      <FlexContainer>
        <LetterBoxColoredSmall color="yellow">
          {t('colors-explanation.3')}
        </LetterBoxColoredSmall>
        <ExplanationText>,</ExplanationText>
        <LetterBoxColoredSmall color="yellow">
          {t('colors-explanation.4')}
        </LetterBoxColoredSmall>
        <ExplanationText>{t('colors-explanation.5')}</ExplanationText>
      </FlexContainer>

      <FlexContainer>
        <LetterBoxColoredSmall color="green">
          {t('colors-explanation.6')}
        </LetterBoxColoredSmall>
        <ExplanationText>{t('colors-explanation.7')}</ExplanationText>
      </FlexContainer>
    </Background>
  );
}

export default ColorsExplanation;
