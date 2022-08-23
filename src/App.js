import Header from "./components/Header";
import Container from "./components/Container";
import styled from "styled-components";

const Main = styled.main`
  margin: 0 auto;
  width: 100%;
`;

function App() {
  return (
    <Main>
      <Header />
      <Container />
    </Main>
  );
}

export default App;
