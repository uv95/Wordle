import React from "react";
import WordExample from "./WordExample";
import ColorsExplanation from "./ColorsExplanation";
import Text from "../Text";

function InfoContent() {
  return (
    <>
      <Text marginBottom>
        You have to guess the hidden word in 6 tries and the color of the
        letters changes to show how close you are.
      </Text>
      <Text marginBottom>
        To start the game, just enter any word, for example:
      </Text>
      <WordExample
        colors={["gray", "yellow", "gray", "yellow", "green"]}
        word="table"
      />
      <ColorsExplanation />
      <Text marginBottom>
        Another try to find matching letters in the target word.
      </Text>
      <WordExample
        colors={["green", "green", "green", "gray", "gray"]}
        word="flash"
      />
      <Text marginBottom>So close!</Text>
      <WordExample
        colors={["green", "green", "green", "green", "green"]}
        word="flame"
      />
      <Text bold>Got it!</Text>
    </>
  );
}

export default InfoContent;
