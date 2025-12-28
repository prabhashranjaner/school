import styled from "styled-components";
import CountdownTimer from "./components/CountdownTimer";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  width: 95vw;
  padding-top: 6rem;
  padding-bottom: 4rem;
  padding-inline: 1rem;
  margin: 0 auto;
  text-align: center;
  height: 100dvh;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 786px) {
    max-width: 700px;
    padding-bottom: 6rem;
    padding-top: 8rem;
  }
`;

const Header = styled.h1`
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 6px;
  line-height: 1.5;
  color: white;

  @media screen and (min-width: 786px) {
    font-size: 36px;
  }
`;

const CountdownWrapper = styled.div`
  margin-top: 5rem;
  @media screen and (min-width: 786px) {
    margin-top: 7rem;
  }
`;

function App() {
  return (
    <AppContainer>
      <Header>We're launching soon</Header>
      <CountdownWrapper>
        <CountdownTimer targetDate="Jan 23, 2026 11:59:00" />
      </CountdownWrapper>

      <Footer />
    </AppContainer>
  );
}

export default App;
