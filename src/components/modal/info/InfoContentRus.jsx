import React from "react";
import WordExample from "./WordExample";
import ColorsExplanationRus from "./ColorsExplanationRus";
import Text from "../Text";

function InfoContentRus() {
  return (
    <>
      <Text marginBottom>
        Вы должны угадать слово за 6 попыток. Цвет букв меняется в зависимости
        от того, насколько вы близко к разгадке.
      </Text>
      <Text marginBottom>
        Чтобы начать игру, введите любое слово, например:
      </Text>
      <WordExample
        colors={["gray", "yellow", "gray", "yellow", "green"]}
        word="паста"
      />
      <ColorsExplanationRus />
      <Text marginBottom>
        Следующая попытка найти подходящие буквы в загаданном слове.
      </Text>
      <WordExample
        colors={["green", "green", "green", "gray", "gray"]}
        word="траур"
      />
      <Text marginBottom>Уже близко!</Text>
      <WordExample
        colors={["green", "green", "green", "green", "green"]}
        word="трава"
      />
      <Text bold>В яблочко!</Text>
    </>
  );
}

export default InfoContentRus;
