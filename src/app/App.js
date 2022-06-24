import styled from 'styled-components';
import Award from '../components/Award';

import Logo from '../components/Logo';
import Metrics from '../components/Metrics';

const App = () => {
  return (
    <main className="App">
      <Section>
        <Logo />
        <InfoContainer>
          <Metrics />
          <Award />
        </InfoContainer>
      </Section>
    </main>
  );
};

const Section = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 0px auto;

  section {
    width: 50%;
  }
`;

const InfoContainer = styled.div`
  margin-left: 300px;
`;

export default App;
