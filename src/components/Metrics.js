import styled from 'styled-components';

import useCountUp from '../common/hooks/useCountUp';
import { fadeInUp } from '../style/keyframes/keyframes';

const Metrics = () => {
  const users = useCountUp(700);
  const reviews = useCountUp(100);
  const schedules = useCountUp(470);

  return (
    <MetricsContainer>
      <div>
        <strong>{users}만 명</strong>의 여행자
      </div>
      <div>
        <strong>{reviews}만 개</strong>의 여행 리뷰
      </div>
      <div>
        <strong>{schedules}만 개</strong>의 여행 일정
      </div>
    </MetricsContainer>
  );
};

const MetricsContainer = styled.div`
  margin-left: 300px;
  padding-top: 150px;
  animation: ${fadeInUp} 700ms ease-in-out 100ms;

  div {
    margin-bottom: 20px;
    font-size: var(--large-font-size);
  }
`;

export default Metrics;
