import Header from './components/Header';
import Container from './components/Container';
import styled from 'styled-components';
import { Suspense } from 'react';

const Main = styled.main`
  margin: 0 auto;
  width: 100%;
`;

function App() {
  console.log(['ga-ga', 'words', 'maps', 'ru-ru'].filter(word=>!word.split('').includes('-')))
  return (
    <Main>
      <Suspense fallback="">
        <Header />
        <Container />
      </Suspense>
    </Main>
  );
}

export default App;
