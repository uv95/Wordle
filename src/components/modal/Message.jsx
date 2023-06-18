import styled from 'styled-components';
import ModalContainer from '../style-components/ModalContainer';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

const Container = styled(ModalContainer)`
  width: 25rem;
  height: 5rem;
  padding: 1rem;
  z-index: 2;
`;

const Text = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
`;

function Message() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <Text>{t('no-word')}</Text>
      </Container>
    </Wrapper>
  );
}

export default Message;
