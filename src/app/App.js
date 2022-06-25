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
  position: relative;
  max-width: 1200px;
  margin: 0px auto;
`;

const InfoContainer = styled.div`
  margin-left: 300px;
`;

export default App;
