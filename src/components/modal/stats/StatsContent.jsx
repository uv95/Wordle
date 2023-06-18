import styled from 'styled-components';
import Text from '../../style-components/Text';
import ProgressBars from './ProgressBars';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const StatsBox = styled.div`
  background-color: var(--color-btn);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  padding: 1rem;
`;

const Number = styled.h3`
  font-size: 3rem;
  font-weight: 700;
`;

function StatsContent() {
  const { numGuessesList, numGamesWon, numGamesPlayed } = useSelector(
    (state) => state.word
  );
  const { t } = useTranslation();

  return (
    <>
      <GridContainer>
        <StatsBox>
          <Number>{numGamesPlayed}</Number>
          <Text>{t('stats-content.0')}</Text>
        </StatsBox>

        <StatsBox>
          <Number>{numGamesWon}</Number>
          <Text>{t('stats-content.1')}</Text>
        </StatsBox>

        <StatsBox>
          <Number>
            {!Object.values(numGuessesList).every((n) => n === 0)
              ? Math.min(
                  ...Object.keys(numGuessesList).filter(
                    (key) => numGuessesList[key] !== 0
                  )
                )
              : 0}
          </Number>
          <Text>{t('stats-content.2')}</Text>
        </StatsBox>

        <StatsBox>
          <Number>
            {Math.trunc((numGamesWon / numGamesPlayed) * 100) || 0}%
          </Number>
          <Text>{t('stats-content.3')}</Text>
        </StatsBox>
      </GridContainer>

      <ProgressBars />
    </>
  );
}

export default StatsContent;
