import React, { useMemo } from 'react';
import WordExample from './WordExample';
import ColorsExplanation from './ColorsExplanation';
import { useSelector } from 'react-redux';
import Text from '../../style-components/Text';

function InfoContent({ lang }) {
  const { language } = useSelector((state) => state.language);

  const text = useMemo(() => {
    if (language === 'English')
      return [
        'You have to guess the hidden word in 6 tries and the color of the letters changes to show how close you are.',
        'To start the game, just enter any word, for example:',
        'Another try to find matching letters in the target word.',
        'So close!',
        'Got it!',
      ];
    if (language === 'Russian')
      return [
        'Вы должны угадать слово за 6 попыток. Цвет букв меняется в зависимости от того, насколько вы близко к разгадке.',
        'Чтобы начать игру, введите любое слово, например:',
        'Следующая попытка найти подходящие буквы в загаданном слове.',
        'Уже близко!',
        'В яблочко!',
      ];
  }, [language]);

  const words = useMemo(() => {
    if (language === 'English') return ['table', 'flash', 'flame'];
    if (language === 'Russian') return ['паста', 'траур', 'трава'];
  }, [language]);

  return (
    <>
      <Text hasMarginBottom>{text[0]}</Text>
      <Text hasMarginBottom>{text[1]}</Text>
      <WordExample
        colors={['gray', 'yellow', 'gray', 'yellow', 'green']}
        word={words[0]}
      />
      <ColorsExplanation />
      <Text hasMarginBottom>{text[2]}</Text>
      <WordExample
        colors={['green', 'green', 'green', 'gray', 'gray']}
        word={words[1]}
      />
      <Text hasMarginBottom> {text[3]}</Text>
      <WordExample
        colors={['green', 'green', 'green', 'green', 'green']}
        word={words[2]}
      />
      <Text bold> {text[4]}</Text>
    </>
  );
}

export default React.memo(InfoContent);
