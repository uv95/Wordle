import React from "react";
import styled from "styled-components";
import Text from "../Text";
import ProgressBars from "./ProgressBars";
import { useSelector } from "react-redux";

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

  @media (max-width: 15em) {
    font-size: 2.5rem;
  }
`;

function StatsContentRus() {
  const { guessesNumberList, gamesWon, gamesPlayed } = useSelector(
    (state) => state.word
  );

  return (
    <>
      <GridContainer>
        <StatsBox>
          <Number>{gamesPlayed}</Number>
          <Text>игр сыграно</Text>
        </StatsBox>

        <StatsBox>
          <Number>{gamesWon}</Number>
          <Text>игр выиграно</Text>
        </StatsBox>

        <StatsBox>
          <Number>
            {!Object.values(guessesNumberList).every((n) => n === 0)
              ? Math.min(
                  ...Object.keys(guessesNumberList).filter(
                    (key) => guessesNumberList[key] !== 0
                  )
                )
              : 0}
          </Number>
          <Text>лучшая попытка</Text>
        </StatsBox>

        <StatsBox>
          <Number>{Math.trunc((gamesWon / gamesPlayed) * 100) || 0}%</Number>
          <Text>% побед</Text>
        </StatsBox>
      </GridContainer>

      <ProgressBars />
    </>
  );
}

export default StatsContentRus;
