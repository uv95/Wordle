import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Row from "./Row";
import { useSelector, useDispatch } from "react-redux";
import { addUsedWord } from "../../store/word/word-actions";
import Spinner from "../modal/Spinner";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  margin: auto;
`;

function Board({ word }) {
  const dispatch = useDispatch();
  const { guesses, lettersColors } = useSelector((state) => state.word);
  const [loading, setLoading] = useState(true);

  const rows = [0, 1, 2, 3, 4, 5];

  useEffect(() => {
    if (word !== "") {
      setLoading(false);
      dispatch(addUsedWord(word));
    }
  }, [word, dispatch]);

  if (loading) return <Spinner />;

  return (
    <Wrapper>
      {rows.map((row) => (
        <Row
          key={row}
          wordChecked={lettersColors[row] && lettersColors[row].length !== 0}
          colors={lettersColors[row]}
          guess={guesses[row]}
        />
      ))}
    </Wrapper>
  );
}

export default Board;
