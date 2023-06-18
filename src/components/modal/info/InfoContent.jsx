import React, { useMemo } from 'react';
import WordExample from './WordExample';
import ColorsExplanation from './ColorsExplanation';
import Text from '../../style-components/Text';
import { useTranslation } from 'react-i18next';

function InfoContent() {
  const { t, i18n } = useTranslation();

  const words = useMemo(() => {
    if (i18n.language === 'en') return ['table', 'flash', 'flame'];
    if (i18n.language === 'ru') return ['паста', 'траур', 'трава'];
  }, [i18n.language]);

  return (
    <>
      <Text hasMarginBottom>{t('info-content.0')}</Text>
      <Text hasMarginBottom>{t('info-content.1')}</Text>
      <WordExample
        colors={['gray', 'yellow', 'gray', 'yellow', 'green']}
        word={words[0]}
      />
      <ColorsExplanation />
      <Text hasMarginBottom>{t('info-content.2')}</Text>
      <WordExample
        colors={['green', 'green', 'green', 'gray', 'gray']}
        word={words[1]}
      />
      <Text hasMarginBottom> {t('info-content.3')}</Text>
      <WordExample
        colors={['green', 'green', 'green', 'green', 'green']}
        word={words[2]}
      />
      <Text bold> {t('info-content.4')}</Text>
    </>
  );
}

export default React.memo(InfoContent);
